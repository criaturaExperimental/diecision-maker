import React, { useReducer } from 'react';
import { createGlobalStyle } from 'styled-components';
import { generateUID } from 'helpers/generateUID';
import {
  removeItemFromArray,
  getAnotherRandomItemFromArray,
} from 'helpers/arrayOperators';

import { Menu } from 'components/Menu';
import { List } from 'components/List';
import { Footer } from 'components/Footer';
import { Input } from 'components/Input';
import { ButtonSimple } from 'components/ButtonSimple';

const decisionList = [
  {
    id: '01',
    label: 'uno',
  },
  {
    id: '02',
    label: 'dos',
  },
];

const initialState = {
  decisions: decisionList,
  candidate: '',
  finalDecision: {},
  menuOpen: false,
};

function formatDecisionToItem(decision) {
  return { id: generateUID(), label: decision };
}

let reducer = (state, action) => {
  switch (action.type) {
    case 'setCandidate':
      return { ...state, candidate: action.decisionLabel };
    case 'addItem':
      const decisionItem = formatDecisionToItem(action.decisionLabel);
      return { ...state, decisions: [...state.decisions, decisionItem] };
    case 'removeItem':
      return {
        ...state,
        decisions: removeItemFromArray(state.decisions, action.decisionId),
      };
    case 'makeDecision':
      const finalDecision = getAnotherRandomItemFromArray(
        state.decisions,
        state.finalDecision.id
      );
      return { ...state, finalDecision };
    case 'toggleMenu':
      return { ...state, menuOpen: !state.menuOpen };
    default:
      break;
  }
};

export const DecisionContext = React.createContext();

export function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addDecision(decisionLabel) {
    dispatch({ type: 'addItem', decisionLabel });
  }
  function setCandidate(decisionLabel) {
    dispatch({ type: 'setCandidate', decisionLabel });
  }
  function addDecisionWhenEnter(event) {
    if (event.key === 'Enter') {
      addDecision(state.candidate);
      setCandidate('');
    }
  }
  function removeDecision(decisionId) {
    dispatch({ type: 'removeItem', decisionId });
  }
  function makeDecision() {
    dispatch({ type: 'makeDecision' });
  }

  function onMenuClick() {
    dispatch({ type: 'toggleMenu' });
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <Menu menuOpen={state.menuOpen} onMenuClick={onMenuClick} />
      <main>
        <DecisionContext.Provider value={state.finalDecision}>
          <List list={state.decisions} removeItem={removeDecision} />
        </DecisionContext.Provider>
        <Footer>
          <Input
            placeholder='add something'
            value={state.candidate}
            onInputChange={setCandidate}
            onEnterKey={addDecisionWhenEnter}
          />
          <ButtonSimple
            decisionButtonClickHandler={makeDecision}
            label='Make a decision'
          />
        </Footer>
      </main>
    </React.Fragment>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    text-align: center;
  }
  main {
    position: relative;
    top: 50px;
  }
`;

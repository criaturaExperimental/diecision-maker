import React, { useReducer } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { generateUID } from 'helpers/generateUID';
import {
  getRandomItemFromArray,
  removeItemFromArray,
} from 'helpers/arrayOperators';

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
      const final = getRandomItemFromArray(state.decisions);
      return { ...state, finalDecision: final };
    default:
      break;
  }
};

export const DecisionContext = React.createContext();

export function AppBase(props) {
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

  return (
    <main className={props.className}>
      <GlobalStyle />
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
  );
}

export const App = styled(AppBase)`
  text-align: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }`;

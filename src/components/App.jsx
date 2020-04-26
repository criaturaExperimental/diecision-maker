import React, { useReducer } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { generateUID } from 'helpers/generateUID';
import {
  removeItemFromArray,
  getAnotherRandomItemFromArray,
} from 'helpers/arrayOperators';
import { menuPresets } from 'repositories/presets';

import { MenuView } from 'components/MenuView';
import { MenuList } from 'components/MenuList';
import { Header } from 'components/Header';
import { List } from 'components/List';
import { Footer } from 'components/Footer';
import { Input } from 'components/Input';
import { ButtonSimple } from 'components/ButtonSimple';

const firstPresetList = menuPresets[0].presetList;

const initialState = {
  decisions: firstPresetList,
  candidate: '',
  finalDecision: { id: '', label: '' },
  menuOpen: true,
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
    case 'clearDecision':
      return { ...state, finalDecision: { id: '', label: '' } };
    case 'toggleMenu':
      return { ...state, menuOpen: !state.menuOpen };
    case 'setPreset':
      return { ...state, decisions: action.presetList };
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

  function onMenuClick() {
    dispatch({ type: 'toggleMenu' });
  }
  function setPreset(presetList) {
    dispatch({ type: 'setPreset', presetList });
    dispatch({ type: 'clearDecision' });
  }

  return (
    <div className={props.className}>
      <GlobalStyle />
      <MenuView menuOpen={state.menuOpen} onMenuClick={onMenuClick}>
        <MenuList list={menuPresets} clickItem={setPreset} />
        <Header appTitle='diecision maker' />
      </MenuView>
      <main>
        <DecisionContext.Provider value={state.finalDecision}>
          <List list={state.decisions} clickItem={removeDecision} />
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
    </div>
  );
}

export const App = styled(AppBase)`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  main {
    position: relative;
    top: 50px;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

import React, { useReducer } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
};

function generateUID() {
  let firstPart = (Math.random() * 46656) | 0;
  let secondPart = (Math.random() * 46656) | 0;
  firstPart = ('000' + firstPart.toString(36)).slice(-3);
  secondPart = ('000' + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}

function formatDecisionToItem(decision) {
  return { id: generateUID(), label: decision };
}

let reducer = (state, action) => {
  switch (action.type) {
    case 'addItem':
      const decisionItem = formatDecisionToItem(action.payload);
      return { ...state, decisions: [...state.decisions, decisionItem] };
    case 'setCandidate':
      return { ...state, candidate: action.payload };
    default:
      break;
  }
};

export function AppBase(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addDecision(decision) {
    dispatch({ type: 'addItem', payload: decision });
  }
  function setCandidate(decision) {
    dispatch({ type: 'setCandidate', payload: decision });
  }
  function addDecisionWhenEnter(event) {
    if (event.key === 'Enter') {
      addDecision(state.candidate);
      setCandidate('');
    }
  }

  return (
    <main className={props.className}>
      <GlobalStyle />
      <List list={state.decisions} />
      <Footer>
        <Input
          placeholder='add something'
          value={state.candidate}
          onInputChange={setCandidate}
          onEnterKey={addDecisionWhenEnter}
        />
        <ButtonSimple
          decisionButtonClickHandler={() => console.log('Button clicked')}
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

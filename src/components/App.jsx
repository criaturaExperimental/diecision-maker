import React from 'react';
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

export function AppBase(props) {
  return (
    <main className={props.className}>
      <GlobalStyle />
      <List list={decisionList} />
      <Footer>
        <Input
          placeholder='add something'
          keyHandler={() => console.log('you keyed up')}
          inputOnChange={() => console.log('value changed')}
          value=''
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

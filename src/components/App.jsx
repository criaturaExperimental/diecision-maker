import React from 'react';
import styled from 'styled-components';

function AppBase(props) {
  return (
    <div className={props.className}>
      <h1>Hello {props.appTitle}</h1>
    </div>
  );
}

export const App = styled(AppBase)`
  text-align: center;
`;

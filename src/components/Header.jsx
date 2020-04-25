import React from 'react';
import styled from 'styled-components';

export function HeaderBase(props) {
  return (
    <header className={props.className}>
      <h1>{props.appTitle}</h1>
    </header>
  );
}

export const Header = styled(HeaderBase)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
    font-size: 1.75em;
  }
`;

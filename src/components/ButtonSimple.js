import React from 'react';
import styled from 'styled-components';

export function ButtonSimpleBase(props) {
  return (
    <div
      className={props.className}
      onClick={props.decisionButtonClickHandler}
      alt='Make decision'
    >
      <p>{props.label}</p>
    </div>
  );
}

export const ButtonSimple = styled(ButtonSimpleBase)`
  cursor: pointer;
  border: 2px solid black;
  box-shadow: 3px 4px 0px 0px #c3c3c3;
  width: 20ch;
  transition: 300ms ease-in-out;
  background-color: white;
  p {
    margin: 8px 0;
  }
`;

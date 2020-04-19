import React from 'react';
import styled from 'styled-components';

export function InputBase(props) {
  return (
    <input
      className={props.className}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onInputChange(e.target.value)}
      onKeyUp={props.onEnterKey}
    ></input>
  );
}

export const Input = styled(InputBase)`
  border: 2px solid black;
  box-shadow: 3px 4px 0px 0px #c3c3c3;
  line-height: 2.5em;
  width: 18ch;
  padding-left: 18px;
`;

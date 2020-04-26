import React from 'react';
import styled from 'styled-components';

export function Component(props) {
  return (
    <li className={props.className} onClick={() => props.clickItem()}>
      {props.label}
    </li>
  );
}

export const MenuItem = styled(Component)`
  background-color: white;
  cursor: pointer;
  padding: 20px;
  margin: 5px;
  width: 30ch;
  border: 2px solid black;
  box-shadow: 3px 4px 0px 0px #c3c3c3;
  &.active {
    background-color: yellow;
  }
`;

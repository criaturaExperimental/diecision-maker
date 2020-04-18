import React from 'react';
import styled from 'styled-components';

export function Component(props) {
  return (
    <li className={props.className} key={props.index}>
      {props.label}
    </li>
  );
}

export const ItemList = styled(Component)`
  cursor: pointer;
  padding: 3%;
  margin: 5px;
  width: 30ch;
  border: 2px solid black;
  box-shadow: 3px 4px 0px 0px #c3c3c3;
`;

import React, { useContext } from 'react';
import styled from 'styled-components';
import { DecisionContext } from 'components/App';

export function Component(props) {
  const finalDecision = useContext(DecisionContext);
  const isFinalDecision = props.id === finalDecision.id;
  const classes = `${props.className} ${isFinalDecision ? 'active' : ''}`;
  return (
    <li className={classes} onClick={() => props.clickItem(props.id)}>
      {props.label}
    </li>
  );
}

export const ItemList = styled(Component)`
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

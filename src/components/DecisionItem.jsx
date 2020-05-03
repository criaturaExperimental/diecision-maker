import React from 'react';
import styled from 'styled-components';
import { itemStyle } from '../styles/_commonItem';
import { Decision } from './Decision';

export function DecisionItemBase(props) {
  let isFinalDecision = false;

  if (props.finalDecision === props.decision) {
    isFinalDecision = true;
  }
  const classes = `${props.className} ${isFinalDecision ? 'active' : ''}`;

  return (
    <li className={classes} key={props.index} onClick={props.itemClickHandler}>
      <Decision decision={props.decision} />
    </li>
  );
}

export const DecisionItem = styled(DecisionItemBase)`
  cursor: pointer;
  padding: 3%;
  margin: 5px;
  width: 30ch;
  ${itemStyle}
  background-color: ${props => {
    return props.finalDecision === props.decision ? 'yellow' : 'white';
  }};
`;

import React from 'react';
import styled from 'styled-components';

import { MenuItem } from 'components/MenuItem';

export function Component(props) {
  return (
    <ul className={props.className}>
      {props.list.map((item, index) => (
        <MenuItem key={index} label={item.label} clickItem={props.clickItem} />
      ))}
    </ul>
  );
}

export const MenuList = styled(Component)`
  list-style: none;
  padding-inline-start: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

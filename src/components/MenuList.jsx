import React from 'react';
import styled from 'styled-components';

import { ItemList } from 'components/ItemList';

export function Component(props) {
  return (
    <ul className={props.className}>
      {props.list.map((item, index) => (
        <ItemList
          key={index}
          id={item.id}
          label={item.label}
          clickItem={props.clickItem}
        />
      ))}
    </ul>
  );
}

export const MenuList = styled(Component)``;

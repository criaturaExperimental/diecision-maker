import React from 'react';
import styled from 'styled-components';

import { ItemList } from 'components/ItemList';

export function ListBase(props) {
  return (
    <ul className={props.className}>
      {props.list.map((item) => (
        <ItemList
          key={item.id}
          id={item.id}
          label={item.label}
          removeItem={props.removeItem}
        />
      ))}
    </ul>
  );
}

export const List = styled(ListBase)`
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 65vh;
  overflow: scroll;
`;

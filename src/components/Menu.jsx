import React from 'react';
import styled from 'styled-components';

export function Component(props) {
  return (
    <div className={props.className} onClick={props.onMenuClick}>
      {props.children}
    </div>
  );
}

export const Menu = styled(Component)`
  top: 50px;
  cursor: pointer;
  background: black;
  position: fixed;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  transform-origin: top left;
  transition: all 750ms ease-in-out;
  ${(props) =>
    props.menuOpen
      ? 'transform: translateY(-50px);'
      : 'transform: translateY(-100vh);'}
`;

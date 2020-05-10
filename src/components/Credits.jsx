import React, { useState } from 'react';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

export function Component(props) {
  const [active, setActive] = useState(false);
  const classes = `${props.className} ${active ? 'active' : ''}`;
  return (
    <div className={classes} onClick={() => setActive(!active)}>
      <Link href='https://www.lucasdegomez.com'>Lucas deGomez</Link>
    </div>
  );
}

export const Credits = styled(Component)`
  position: fixed;
  cursor: pointer;
  background: white;
  padding-right: 16px;
  top: 50vh;
  z-index: 1;
  width: 16ch;
  border-radius: 0 20px 20px 0;
  line-height: 2.5;
  border: 2px black solid;
  box-shadow: 3px 3px 0px 0px #c3c3c3;
  transform: translateX(-15ch);
  transition: all 750ms ease-in-out;
  &.active {
    transform: translateX(0);
  }
`;

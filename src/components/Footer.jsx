import React from 'react';
import styled from 'styled-components';

export function FooterBase(props) {
  return <footer className={props.className}>{props.children}</footer>;
}

export const Footer = styled(FooterBase)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 1px 16px 0px #c3c3c3;
  padding-bottom: 10px;
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 20vh;
  h1 {
    color: black;
    font-size: 1.75em;
  }
`;

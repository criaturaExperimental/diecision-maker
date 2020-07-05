import * as React from 'react';

type InputProps = {
  placeholder: string;
  value: string;
  onInputChange: any;
  onEnterKey: any;
} & React.DOMAttributes<HTMLElement>;

export function Input(props: InputProps) {
  return (
    <input
      css={`
        border: 2px solid black;
        box-shadow: 3px 4px 0px 0px #c3c3c3;
        line-height: 2.5em;
        width: 18ch;
        padding-left: 18px;
      `}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onInputChange(e.target.value)}
      onKeyUp={props.onEnterKey}
    ></input>
  );
}

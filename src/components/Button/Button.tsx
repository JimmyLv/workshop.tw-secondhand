import * as React from 'react';
import './Button.css';

interface ButtonProps {
  text?: string;
  handleClick?: Function;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => (
  <button className="Btn" disabled={props.disabled} onClick={() => props.handleClick()}>{props.text}
  </button>
);
export default Button;

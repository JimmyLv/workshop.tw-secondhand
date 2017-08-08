import * as React from 'react';
import './Button.css';

interface ButtonProps {
  text?: string;
  handleClick?: Function;
}

const Button = (props: ButtonProps) => (
  <button className="Btn" onClick={() => props.handleClick()}>{props.text}
  </button>
);
export default Button;

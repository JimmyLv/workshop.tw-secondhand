import * as React from 'react';
import './Header.css';

const closeIcon = require('../../resources/close.svg');

interface HeaderProps {
  text?: string;
}

const Header = (props: HeaderProps) => {
  return (
    <div>
      <img src={closeIcon} className="Img"/>
      <div className="Header">{props.text}</div>
    </div>
  );
};
export default Header;

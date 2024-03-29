import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/react.svg';

const Logo = () => {
  return (
    <Link to="/">
      <img alt="Hiring tracker" src={logo} />
    </Link>
  );
};

export default Logo;

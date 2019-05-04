// Dependencies
import React from 'react';
// Images
import logo from '../../assets/images/Logo2.png';

// components
import Name from './Name';

const Logo = () => {
  return (
    <div id="logo-container">
      <img id="main-logo" src={logo} alt="spread love in JS" />
      <Name />
    </div>
  );
};

export default Logo;

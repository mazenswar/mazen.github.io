// Dependencies
import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
// Images
import githubIcon from '../assets/images/GitHub.png';
import linkedInIcon from '../assets/images/LinkedIn.png';
import homeIcon from '../assets/images/Home.png';

const Nav = () => {
  return (
    <nav id="main-nav">
      <a href="http://github.com/mazenswar">
        {' '}
        <img className="nav-icon" src={githubIcon} alt="" />{' '}
      </a>
      <a href="https://www.linkedin.com/in/mazen-alswar/">
        {' '}
        <img className="nav-icon" src={linkedInIcon} alt="" />{' '}
      </a>
      <Link to="/home">
        {' '}
        <img className="nav-icon" src={homeIcon} alt="" />{' '}
      </Link>
    </nav>
  );
};

export default Nav;

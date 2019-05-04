// Dependencies
import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

const HomeLinks = () => {
  return (
    <nav id="home-links">
      <Link to="/about"> mazen.about </Link>
      <Link to="/technical-projects"> mazen.technicalProjects </Link>
      <Link to="/work-experience"> mazen.workExperience </Link>
      <Link to="/education"> mazen.education </Link>
    </nav>
  );
};

export default HomeLinks;

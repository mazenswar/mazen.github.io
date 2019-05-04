// Dependencies
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// Containers
import Home from '../containers/Home';
import WorkExperience from '../containers/WorkExperience';
import Education from '../containers/Education';
import TechnicalProjects from '../containers/TechnicalProjects';
import AboutMazen from '../containers/AboutMazen';

const Routes = () => {
  return (
    <Switch>
      <Route path="/about" component={AboutMazen} />
      <Route path="/work-experience" component={WorkExperience} />
      <Route path="/education" component={Education} />
      <Route path="/technical-projects" component={TechnicalProjects} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;

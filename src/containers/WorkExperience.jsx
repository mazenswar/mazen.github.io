// Dependencies
import React from 'react';
// Components
import Diplomat from '../components/work-experience/Diplomat';
import Misc from '../components/work-experience/Misc';
// Stylesheets
import '../stylesheets/work-experience.scss';

const WorkExperience = () => {
  return (
    <React.Fragment>
      <h1>mazen.workExperience</h1>
      <main id="work-experience-container">
        <Diplomat />
        <Misc />
      </main>
    </React.Fragment>
  );
};

export default WorkExperience;

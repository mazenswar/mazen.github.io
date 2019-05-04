// Dependencies
import React from 'react';
// Components
import AboutContent from '../components/about/AboutContent';
// Stylesheet
import '../stylesheets/about.scss';

const AboutMazen = () => {
  return (
    <React.Fragment>
      <h1>mazen.about</h1>
      <main className="about-main-container">
        <div className="about-mazen-content">
          <AboutContent />
        </div>
      </main>
    </React.Fragment>
  );
};

export default AboutMazen;

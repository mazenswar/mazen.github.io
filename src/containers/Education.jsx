// Dependencies
import React from 'react';
// StyleSheets
import '../stylesheets/education.scss';
// Images
import ny from '../assets/images/newYork.svg';
import london from '../assets/images/london.svg';
import bahrain from '../assets/images/bahrain.svg';

const Education = () => {
  return (
    <React.Fragment>
      <h1>mazen.education</h1>

      <div className="education-wrapper">
        <div className="education-details">
          <div className="institution-icon">
            <img
              src="http://nymediacenter.com/wp-content/uploads/2018/08/Access_Labs_logo_Color-01.png"
              alt="access labs logo"
            />
          </div>
          <h2>Access Labs</h2>
          <h3>Flatiron School</h3>
          <h4>Software Engineering Immersive Program</h4>
          <ul>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>SQL</li>
            <li>Postgres</li>
            <li>Active Record</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <img className="illustration" src={ny} alt="ny illustration" />
      </div>

      <div className="education-wrapper">
        <div className="education-details">
          <div className="institution-icon">
            <img
              src="https://eprints.soas.ac.uk/style/images/soas-logo.png"
              alt="soas logo"
            />
          </div>
          <h2>SOAS</h2>
          <h3>University of London</h3>
          <h4>MA in Global Media and Postnational Communication</h4>
          <ul>
            <li>Media Studies</li>
            <li>Middle East Politics</li>
            <li>The Politics of Semantics</li>
            <li>Critical Research</li>
            <li>Academic Writing</li>
          </ul>
        </div>
        <img className="illustration" src={london} alt="london illustration" />
      </div>

      <div className="education-wrapper">
        <div className="education-details">
          <div className="institution-icon">
            <img src="https://i.imgur.com/TKDiAih.jpg" alt="access labs logo" />
          </div>
          <h2>University College of Bahrain</h2>
          <h4>BA in Public Relations</h4>
          <ul>
            <li>Press Releases</li>
            <li>Translation</li>
            <li>PR Theory</li>
            <li>Public Opinion</li>
            <li>Advertising and Marketing Fundamentals</li>
            <li>Quantative and Qualitative Research</li>
          </ul>
        </div>
        <img className="illustration" src={bahrain} alt="bh illustration" />
      </div>
    </React.Fragment>
  );
};

export default Education;

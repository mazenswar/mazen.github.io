// Dependencies
import React from 'react';

const Diplomat = () => {
  return (
    <div id="diplomat-container">
      <h2 className="section-title">Ministry of Foreign Affairs of Bahrain</h2>

      <div className="container">
        <div className="level-1">
          <section className="work-div">
            <header id="diplomacy-header">
              <h2 className="jb-header">Positions Held</h2>
              <h2 className="jb-title">
                Diplomatic Attaché
                <span className="job-titles">Diplomatic Institute </span>{' '}
                <span className="job-titles">(3/2017 – 4/2018)</span>
              </h2>
              <h2 className="jb-title">
                Diplomatic Attaché{' '}
                <span className="job-titles">Communication Directorate </span>
                <span className="job-titles">(10/2016 – 3/2017)</span>
              </h2>
              <h2 className="jb-title">
                Diplomatic Attaché{' '}
                <span className="job-titles">Human Rights Directorate </span>
                <span className="job-titles">(5/2016 – 10/2015)</span>
              </h2>
              <h2 className="jb-title">
                Admin Attaché
                <span className="job-titles">Human Rights Division </span>
                <span className="job-titles">(3/2015 – 5/2016)</span>
              </h2>
            </header>

            <ul className="ul-tasks">
              <h2 className="section-header">Tasks</h2>
              <li>
                <h4>Writing Note Verbals</h4>
              </li>

              <li>
                <h4>Report Writing</h4>
              </li>

              <li>
                <h4>Research & Media Monitoring</h4>
              </li>

              <li>
                <h4>Curriculum Development</h4>
              </li>

              <li>
                <h4>Teaching Assistant</h4>
              </li>
            </ul>
          </section>
        </div>

        <div className="level-2">
          <section className="highlights">
            <h2 className="highlights-title">Highlights</h2>
            <div className="speech-div">
              <img
                src="https://reliefweb.int/sites/reliefweb.int/files/resources/1024px-United_Nations_Human_Rights_Council_Logo.svg_.png"
                alt=""
              />

              <a href="http://webtv.un.org/meetings-events/treaty-bodies/watch/item9-general-debate-36th-meeting-29th-regular-session-of-human-rights-council/4329924593001/?term=&lan=spanish?lanspanish#player">
                <h3 className="speech-description">
                  Speech on Item:9 General Debate - 36th Meeting 29th Regular
                  Session of Human Rights Council(minute 39:00)
                </h3>
              </a>
            </div>

            <div className="speech-div">
              <img
                src="https://reliefweb.int/sites/reliefweb.int/files/resources/1024px-United_Nations_Human_Rights_Council_Logo.svg_.png"
                alt=""
              />
              <a href="http://webtv.un.org/grid/ajax/watch/id-commission-of-inquiry-on-gaza-33rd-meeting-29th-regular-session-of-human-rights-council/4327745350001/?term=&sort=date&page=9#player">
                <h3 className="speech-description">
                  Speech on the commission of inquiry on Gaza - 33rd Meeting
                  29th Regular Session of Human Rights Council (minute 1:14)
                </h3>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Diplomat;

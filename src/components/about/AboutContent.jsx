// Dependencies
import React from 'react';
// Pictures
import bgl from '../../assets/images/bgl.jpg';
import dip from '../../assets/images/dip.png';
import al from '../../assets/images/al.jpg';

const AboutContent = () => {
  return (
    <React.Fragment>
      <div className="about-page-image-wrapper">
        <div className="img-div">
          <img className="about-img" src={al} alt="" />
        </div>
        <div className="img-div">
          <img className="about-img" src={dip} alt="" />
        </div>
        <div className="img-div">
          <img className="about-img" src={bgl} alt="" />
        </div>
      </div>
      <div className="about-page-text-wrapper">
        <p>
          I’ve had an eclectic work history many radical shifts. I come from an
          artistic family where my father is a writer and my uncles and aunts do
          a variety of artistic work including painting, photography, carpentry
          and visual arts. I’ve studied a variety of subject and worked in many
          different fields where I went from working in PR, to making bagels, to
          being a diplomat and representing Bahrain in multiple international
          fora.
        </p>
        <p>
          I love tackling new subjects and getting a good grasp of them, whether
          it is in programming, politics or anything that sparks my curiosity. I
          am detail-oriented, hardworking and a self-learner. I am passionate
          about bringing out the best of whoever I work with and I am always
          looking to learn from people around me. I am independent and feel
          comfortable taking on tasks and projects by myself.
        </p>
        <p>
          The culmination of my experiences led me down the path of web
          development and in it (especially in front-end development) I have
          found a perfect intersection that satisfies my intellectual curiosity,
          my passion for the arts and my love for technology.
        </p>
        <p>
          I am currently on the lookout for new career opportunities that will
          help me grow personally and professionally.
        </p>
        <p>
          If you think I would be a good fit for your organisation or would like
          to collaborate with me please do not hesitate to contact me via
          <a href="https://www.linkedin.com/in/mazen-alswar/"> LinkedIn</a>.
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutContent;

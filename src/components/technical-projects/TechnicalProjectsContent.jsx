// Dependencies
import React from 'react';
// Images
import githubIcon from '../../assets/images/GitHub-light.svg';

const TechnicalProjectsContent = () => {
  return (
    <div className="projects-container">
      <div className="project-wrapper">
        <h2>That's What She Said</h2>
        <div className="icon-wrapper">
          <a className="project-icon" href="http://github.com">
            <img src={githubIcon} alt="github-icon" />
          </a>
          <a className="project-icon demo" href="http://youtube.com">
            Demo
          </a>
        </div>
        <p>
          A web app that seeks to highlight the contributions of feminists and
          women activists and provide a platform to discuss those contributions.
        </p>

        <ul>
          <li>
            Backend API built using Ruby on Rails to handle show information and
            user data.
          </li>
          <li>
            JSON Web Token Authentication to ensure that users’ passwords are
            encrypted and stored safely within the database.
          </li>
          <li>
            Used React and Vanilla CSS and SASS to create a responsive,
            attractive and consistent front-end that will draw users and give
            them a pleasant and efficient UX.
          </li>
          <li>
            Users are able to browse feminists and learn about their ideas; to
            create blog posts and share them to Facebook, Twitter and Reddit; to
            like and favorite feminist show pages and other users’ posts.
          </li>
        </ul>
      </div>

      <div className="project-wrapper">
        <h2>BookShare</h2>
        <div className="icon-wrapper">
          <a className="project-icon" href="http://github.com">
            <img src={githubIcon} alt="github-icon" />
          </a>
          <a className="project-icon demo" href="http://youtube.com">
            Demo
          </a>
        </div>
        <p>
          A web app that serves as a platform for users to share books that they
          longer want and get credits in return to get other books.
        </p>

        <ul>
          <li>
            Backend API built using Ruby on Rails to handle show information and
            user data.
          </li>
          <li>
            Incorporated Google Books API so that users can submit books solely
            using an ISBN number.
          </li>
          <li>
            JSON Web Token Authentication to ensure that users’ passwords are
            encrypted and stored safely within the database.
          </li>
          <li>
            Used React and Vanilla CSS and SASS to create an organized UI that
            is clear and easy to use.
          </li>
          <li>
            Users are able to browse books, add them to their cart and order
            them if they have enough credits.
          </li>
        </ul>
      </div>
      <div className="project-wrapper">
        <h2>!Spotify </h2>
        <div className="icon-wrapper">
          <a className="project-icon" href="http://github.com">
            <img src={githubIcon} alt="github-icon" />
          </a>
          <a className="project-icon demo" href="http://youtube.com">
            Demo
          </a>
        </div>
        <p>
          A full Ruby on Rails web app clone of Spotify that lets users play
          music and create playlists.
        </p>

        <ul>
          <li>Built using the Ruby on Rails MVC design pattern.</li>
          <li>User authentication using BCrypt.</li>
          <li>
            Incorporates Google Maps and YouTube APIs to enhance user experience
          </li>
        </ul>
      </div>

      <div className="project-wrapper">
        <h2>Tom Runner</h2>
        <div className="icon-wrapper">
          <a className="project-icon" href="http://github.com">
            <img src={githubIcon} alt="github-icon" />
          </a>
          <a className="project-icon demo" href="http://youtube.com">
            Demo
          </a>
        </div>
        <p>A JavaScript game built using the Phaser library</p>
        <ul>
          <li>
            Uses a combination of vanilla JavaScript and the Phaser library to
            create a two-dimensional runner game
          </li>
          <li>
            Backend API built using Ruby on Rails to handle user data and game
            scores
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TechnicalProjectsContent;

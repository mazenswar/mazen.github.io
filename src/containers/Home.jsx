// Dependencies
import React from 'react';
// Components
import Logo from '../components/home/Logo';
import HomeLinks from '../components/home/HomeLinks';
// Stylesheets
import '../stylesheets/home.scss';

const Home = () => {
  return (
    <main id="home-page">
      <Logo />
      <HomeLinks />
    </main>
  );
};

export default Home;

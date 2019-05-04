// Dependencies
import React from 'react';
import { HashRouter } from 'react-router-dom';
// Router
import Routes from './router/routes';
// Components
import Nav from './master/Nav';
// StyleSheets
import './stylesheets/master.scss';

function App() {
  return (
    <HashRouter basename="/">
      <Nav />
      <Routes />
    </HashRouter>
  );
}

export default App;

import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';

import ScrollToTop from './config/ScrollToTop';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <ScrollToTop />
      <Routes />
    </Router>
  );
}

export default App;

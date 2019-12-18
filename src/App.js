import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';

import ScrollToTop from './config/ScrollToTop';
import Routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router history={history}>
      <ScrollToTop />
      <Routes />
      <Header />
      <Footer />
    </Router>
  );
}

export default App;

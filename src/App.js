import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer autoClose={4000} />
    </Router>
  );
}

export default App;

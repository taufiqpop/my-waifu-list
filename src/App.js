import React from 'react';
import Header from './components/Header';
import AppRouter from './AppRouter';
import Footer from './components/Footer';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;

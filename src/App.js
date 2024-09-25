import React from 'react';
import Header from './components/Header';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
}

export default App;

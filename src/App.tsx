import React, { ReactElement } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import NavHeader from './components/NavHeader';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Router>
        <NavHeader />
        <Routes />
      </Router>
    </div>
  );
};

export default App;

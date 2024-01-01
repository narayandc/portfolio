import React from 'react';
import './assets/styles/load.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Index from './components/Index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
};

export default App;

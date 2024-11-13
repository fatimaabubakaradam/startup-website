import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'; // Import the Home component
import Portfolio from './Portfolio'; // Import the Portfolio component, if you have it

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for the homepage */}
        <Route path="/Portfolio" element={<Portfolio />} /> {/* Route for the portfolio page */}
      </Routes>
    </Router>
  );
};

export default App;

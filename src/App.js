import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'; 
import Portfolio from './Portfolio'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Portfolio" element={<Portfolio />} /> 
      </Routes>
    </Router>
  );
};
export default App;

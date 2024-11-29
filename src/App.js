import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'; 
import Portfolio from './Portfolio'; 
import Service from './service'; 
import Contact from './contact'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Portfolio" element={<Portfolio />} /> 
        <Route path="/service" element={<Service />} /> 
        <Route path="/contact" element={< Contact/>} />  
      </Routes>
    </Router>
  );
};
export default App;

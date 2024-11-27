import React, { useState } from 'react';
import Group1 from './asset/Group 1.png';
import Vector from './asset/Vector.png';
import Group from './asset/Group.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={Group1} alt="Start Logo" className="logo" />
        <span className="logo-text">Start</span>
      </div>
      
      <nav className="navbar">
        <div className="Menu" onClick={toggleMenu}>
          <img src={Vector} alt="Menu Icon" className="Menu-icon" />
        </div>
        
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`} id="navLinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/service"> Service</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="welcome-section">
        <div>      <img src={Group} alt="Group" className="Group" /></div>
          <div>
             <h2>Welcome</h2>
             <h1>Lorem ipsum dolor sit amet consectetur</h1>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab dolor aperiam nobis cum set cos error ipsum,volimptate culpan nesciunt delectus iste?</p>
             <button className="explore-button">Explore</button>

          </div>
       
      </div>
      
     </header>
  );
};
export default Header;

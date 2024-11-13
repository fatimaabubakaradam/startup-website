import React, { useState } from 'react';
import Vector from './asset/Vector.png';
import { Link } from 'react-router-dom';
import Group1 from './asset/Group 1.png';

const Nav = () => {
  // State to track menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
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

        {/* Toggle the "show" class based on menuOpen state */}
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`} id="navLinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
                                                                                        
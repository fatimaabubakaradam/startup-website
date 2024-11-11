import React from 'react';
import Group1 from './asset/Group 1.png';
import Vector from './asset/Vector.png';
import Group from './asset/Group.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={Group1} alt="Start Logo" className="logo" />
        <span className="logo-text">Start</span>
      </div>
      <nav class="navbar">
    <div className="Menu" >
    <img src={Vector} alt="Menu Icon" className="Menu" />
    </div>
    <ul class="nav-links" id="navLinks">
        <li><a>Home</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Services</a></li>
        <li><a>Contact</a></li>
    </ul>
</nav>
      <div className="menu-icon">
        
      <div className="welcome-section">
        <h2>Welcome</h2>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab dolor aperiam nobis cum set cos error ipsum,volimptate culpan nesciunt delectus iste?</p>
      
        <button className="explore-button">Explore</button>
      </div>
        <img src={Group} alt="Group" className="Group" />
      </div>
      
    
    </header>
  );
};

export default Header;

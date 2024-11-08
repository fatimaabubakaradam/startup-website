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
        <img src={Vector} alt="Menu Icon" className="Menu" />
      </div>
      <div className="menu-icon">
        <img src={Group} alt="Group" className="Group" />
      </div>
      <div className="welcome-section">
        <h2>Welcome</h2>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab dolor aperiam nobis cum set cos error ipsum,volimptate culpan nesciunt delectus iste?</p>
      
        <button className="explore-button">Explore</button>
      </div>
    
    </header>
  );
};

export default Header;

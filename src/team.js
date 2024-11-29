import React from 'react';
import teamImage from './asset/team.png';  

const Team = () => {  
  return (
    <div className='section-two'>
      <div className='team-picture-container'>
        <img src={teamImage} alt="team" className='team' />
      </div>
    <div className='teeamm'>
      <h1 className='team-text1'>Lemon ipsum dolor sit amet consectetur</h1>
      <h3 className='team-text'>Lemon ipsum, dolor sit amet consectetur adipisicing elit. Suscipit  meno hit quos, ab, dolor aperiam nobis cum est eos error ipsum,volimptate culpa nesciunt delectus  iste?</h3>
      <button className="learn-button1">Learn More</button>
    </div>
    
    </div>
    
  );
};

export default Team;

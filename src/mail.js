import React from 'react';
import mailImage from './asset/mail.png'; 

const Mail = () => { 
  return (
    <>
    <div className='mailld'> 
      <div className='mail-con'>      <img src={mailImage} alt="mail" className='mail' />
      </div>
      <div className='accent'>
      <h1 className='team-text1'>Lemon ipsum dolor sit amet consectetur</h1>
      <h3 className='team-text'>Lemon ipsum, dolor sit amet consectetur adipisicing elit. Suscipit  meno hit quos, ab, dolor aperiam nobis cum est eos error ipsum,volimptate culpa nesciunt delectus  iste?</h3>
      <button className="learn-button1">Learn More</button>
      </div>
      
    </div>
    </>

  );
};

export default Mail;

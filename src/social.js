import React from 'react';
import XMLID_24_ from './asset/XMLID_24_.png';
import micro from './asset/micro.png';
import air from './asset/air.png';
import facebook from './asset/facebook.png';
import spot from './asset/spot.png';

const Social = () => {
  return (
    <>
      <div>
        <h2 className='part'>PARTNERS</h2>
        <h1 className='lorem'>Lorem Ipsum Dolor</h1>
        <h3 className='ipsum'>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h3>
      </div>
      <div>
        <img src={XMLID_24_} alt="google" className='google' />
        <img src={micro}   alt="microsoft" className='microsoft' />
        <img src={air}  alt="air" className='air' />
        <img src={facebook} alt="facebook" className='facebook' />
        <img src={spot}  alt="spot" className='spot' />
        <button className="learn-button">Learn More</button>
      </div>
    </>
  );
};

export default Social;



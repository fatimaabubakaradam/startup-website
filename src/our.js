import React from 'react';
import Frame1 from './asset/Frame 72.svg'
import Frame2 from './asset/Frame 73@2x.svg'
import Frame3 from './asset/Frame 74.svg'
const Our = () => { 
    return (
        <>
       <div className='service-plan'>
        <p> <span>Plans</span></p>
        <h1>Our service</h1>
        <p> Lorem ipsum , dolor sit amet consectetur adipisicingg elit</p>
      </div>
  <div className='frame'>
    <img src={Frame1} alt='frame1' className='frame1' />
    <img src={Frame2} alt='frame2' className='frame2' />
    <img src={Frame3} alt='frame3' className='frame3' />
  </div>
        </>

    );
  };
  
  export default Our;
  
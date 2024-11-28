import React from 'react';
import Rec from "./asset/Rectangle 249 (2).png"
import Rec1 from "./asset/Rectangle 250.png"
import Whether from "./asset/ghhgnhg 1.png"

const Name = () => {
  return (
    <> 
    <div className='contact-line'>
    <div className='whe-container'><img src={Whether} alt='whether' className='whether' /></div>
    <div className='name-img'>
  <p>name</p>
  <img src={Rec} alt='rec-name' className='rec-name' />
  <p>email</p>
  <img src={Rec} alt='rec-name' className='rec-name'/>
  <p>message</p>
  <img src={Rec1} alt='rec1-name' className='rec1-name'/>
   
    </div>
    </div>
   
    <button className="learn-button2">submit</button>    
    </>
    
  )
  
};

export default Name;

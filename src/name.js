import React from 'react';
import Rec from "./asset/Rectangle 249 (2).png"
import Rec1 from "./asset/Rectangle 250.png"
import Whether from "./asset/ghhgnhg 1.png"

const Name = () => {
  return (
    <> 
    <div className='contact-line'>
    <div className='whe-container'><img src={Whether} alt='whether' className='whether' /></div>
    <div className="contact-form">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"  />

        <label htmlFor="email">Email</label>
        <input type="email" id="email"  />

        <label htmlFor="message">Message</label>
        <textarea id="message" ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
   
    </>
    
  )
  
};

export default Name;

import React from 'react';
import Whether from "./asset/ghhgnhg 1.png";
import { motion } from 'framer-motion';
import Map from './map';

const Name = () => {
  return (
    <motion.div
      className='contact-line'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className='whe-container'>
        <img src={Whether} alt='whether' className='whether' />
      </div>
      <div className="contact-form">
        <form>
        <label>Name</label>
    <input type="text" placeholder="Enter your name" />

    <label>Email</label>
    <input type="email" placeholder="Enter your email" />

    <label>Message</label>
    <textarea placeholder="Write your message here"></textarea>
    

          <button type="submit">Submit</button>
        </form>
      </div>

     
    </motion.div>
  );
};

export default Name;

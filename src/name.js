import React from 'react';
import Whether from "./asset/ghhgnhg 1.png";
import { motion } from 'framer-motion';

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
          <input type="text" />

          <label>Email</label>
          <input type="email" />

          <label>Message</label>
          <textarea></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

     
    </motion.div>
  );
};

export default Name;

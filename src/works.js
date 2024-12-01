import React from 'react';
import { motion } from 'framer-motion';  
import port1Image from './asset/port1.png';
import port2Image from './asset/port2.png';
import port3Image from './asset/port3.png';
import port4Image from './asset/port4.png';
import port5Image from './asset/port5.png';
import port6Image from './asset/port6.png';
import port7Image from './asset/port7.png';
import port8Image from './asset/port8.png';

const Works = () => {
  return (
    <>
      <div className='works'>
        <span> Works</span>
        <h1>portfolio</h1>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
      </div>

      
      <div className='ports'>
        <motion.img 
          src={port1Image} 
          alt='port1' 
          className='port1' 
          initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1}}
        />
        <motion.img 
          src={port2Image} 
          alt='port2' 
          className='port2' 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
        />
        <motion.img 
          src={port3Image} 
          alt='port3' 
          className='port3' 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
        />
        <motion.img 
          src={port4Image} 
          alt='port4' 
          className='port4' 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
        />
        <motion.img 
          src={port5Image} 
          alt='port5' 
          className='port5' 
          initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1}}
        />
        <motion.img 
          src={port6Image} 
          alt='port6' 
          className='port6' 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
          
        />
        <motion.img 
          src={port7Image} 
          alt='port7' 
          className='port7' 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
          
        />
        <motion.img 
          src={port8Image} 
          alt='port8' 
          className='port8' 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
          
        />
      </div>

      <div className='button-class'>
        <motion.button
          className="learn-button2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}  
        >
          Learn More
        </motion.button>
      </div>
    </>
  );
};

export default Works;

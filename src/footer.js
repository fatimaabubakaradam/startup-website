import React from 'react';
import Face from './asset/f.png'
import Insta from './asset/ig.png'
import Twit from './asset/twit.png'
import Phonenix from './asset/pp.png'
import Tik from './asset/tik.png'
import What from './asset/whatsap.png'
import You from './asset/Group 39@2x.png'

const footer = () => {
  return (
    <footer className='footer'>
      <div>
        <img src={Face} alt='face' className='face' />
        <img src={Insta} alt='instagram'  className='insta' />
        <img src={Twit} alt='twit' className='twit'  />
        <img src={Phonenix} alt='phonix' className='phonenix' />
        <img src={Tik} alt='tik' className='tik' />
        <img src={What} alt='what' className='what' />
        <img src={You} alt='you' className='you' />
      </div>
    
    </footer>
  );
};

export default footer;

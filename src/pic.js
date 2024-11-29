import React from 'react';
import picImage from './asset/pic1.png';
import picImage2 from './asset/pic2.png'
import picImage3 from './asset/pic3.png'
import picImage4 from './asset/pic4.png'

const pic = () => {
  return (
    <>
    <div className='imgreal'>
    <div className="profile-card">
      <img src={picImage} alt="profile" className="profile-image" />
      <h2 className="profile-name">Peg Legge</h2>
      <p className="profile-title">CEO</p>
    </div>
    <div className="profile-card">
    <img src={picImage2} alt="profile2" className="profile-image2" />
    <h2 className="profile-name">Richard Guerra</h2>
    <p className="profile-title">CTO</p>
  </div>
   <div className="profile-card">
   <img src={picImage3} alt="profile3" className="profile-image3" />
   <h2 className="profile-name">Alexandra Stolz</h2>
   <p className="profile-title">DESIGNER</p>
   
 </div>
 <div className="profile-card">
   <img src={picImage4} alt="profile4" className="profile-image4" />
   <h2 className="profile-name">Janet Bray</h2>
   <p className="profile-title">DEVELOPER</p>
   
 </div>
    </div>
   <div className='button-class'>
   <button className="learn-button4">view team</button>
   </div>

    
    </>
    
  );
};

export default pic;

import React from 'react';
import './MainContent.css';
import Image from './assets/2.png';
import Image2 from './assets/1.png';
import Image3 from './assets/3.png';
const MainContent = () => {
  return (
    <div style={{
      display: 'block',
      marginLeft: '354px',
      width: '54.2%',
      height: '85vh',
    }}>
      <div className='main-content'>
        <div className='image2'><img src={Image2} /></div>
        <div className='image'><img src={Image} /></div>
      </div>
      <div className='image3'><img src={Image3} /></div>
    </div>
  );
};

export default MainContent;

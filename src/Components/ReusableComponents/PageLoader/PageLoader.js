import React from 'react';
import './PageLoader.css';
import spooky from '../../../Assets/SpookyCamera.png';

function PageLoader() {
  return (
    <div className="page-loader-container">
    <div className="spooky-loader">
      <div className='spooky'><img src={spooky} alt="spooky logo" /></div>
      <div className='spooky'><img src={spooky} alt="spooky logo" /></div>
      <div className='spooky'><img src={spooky} alt="spooky logo" /></div>
    </div>
    </div>
  );
}

export default PageLoader;

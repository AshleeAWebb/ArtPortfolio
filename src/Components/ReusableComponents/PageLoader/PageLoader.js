import React from 'react';
import './PageLoader.css';

function PageLoader() {
  return (
    <div className="loading-screen">
      <div className="camera-lens">
        <div className="spinning">
          <div className="circle" aria-label="Loading"></div>
        </div>
      </div>
    </div>
  );
}

export default PageLoader;

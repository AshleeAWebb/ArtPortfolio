import React from 'react';
import fineArtData from '../data/fineArtData';
import './FineArt.css';

function FineArt() {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Fine Art Gallery</h1>
      <div className="image-grid">
        {fineArtData.map((image, index) => (
          <div key={index} className="image-container">
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
            />
            <p className="image-title">{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FineArt;

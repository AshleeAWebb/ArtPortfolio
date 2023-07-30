import React from 'react';
import fineArtData from '../data/fineArtData';

function FineArt() {
  return (
    <div>
      <h1>Fine Art</h1>
      {fineArtData.map((image, index) => (
        <div key={index}>
          <img
            src={image.src}
            alt={image.alt}
            style={{ width: '300px', height: 'auto' }}
          />
          <p>{image.title}</p>
        </div>
      ))}
    </div>
  );
}

export default FineArt;


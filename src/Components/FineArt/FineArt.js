import React from 'react';
import fineArtData from '../path/to/fineArtData'; // Update the path to your data file

function FineArt() {
  return (
    <div>
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


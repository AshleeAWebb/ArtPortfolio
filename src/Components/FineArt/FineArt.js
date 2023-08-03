import React from 'react';
import fineArtData from '../data/fineArtData';
import { Link } from 'react-router-dom'; // Import Link
import './FineArt.css';

function FineArt() {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Fine Art</h1>
      <div className="image-grid">
        {fineArtData.map((image, index) => (
          <div key={index} className="image-container">
            <Link to={`/fineart/${image.id}`}> {/* Link to DetailedView */}
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
              />
            </Link>
            <p className="image-title">{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FineArt;

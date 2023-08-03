import React from 'react';
import '../Photography/Photography.css';
import albumData from '../data/albumData';
import { Link } from 'react-router-dom';

function Photography() {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Photography</h1>
      <div className="image-grid">
        {albumData.map((album) => (
          <div key={album.id} className="image-container">
            <Link to={`/album/${album.id}`}>
              <img src={album.coverImage} alt={album.title} className="gallery-image" />
            </Link>
            <p className="image-title">{album.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photography;

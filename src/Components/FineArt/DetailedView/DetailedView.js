// DetailedView.js
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import fineArtData from '../../data/fineArtData';
import '../DetailedView/DetailedView.css';

function DetailedView() {
  const { id } = useParams();
  const artwork = fineArtData.find((art) => art.id === Number(id));
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(zoom * 1.1);
  const handleZoomOut = () => setZoom(zoom / 1.1);

  return (
    <div className="detailed-container">
      <div className="detailed-image-container">
        <img
          src={artwork.src}
          alt={artwork.alt}
          className="detailed-image"
          style={{ transform: `scale(${zoom})` }}
        />
        <div className="zoom-controls">
          <button onClick={handleZoomIn}>➕</button> 
          <button onClick={handleZoomOut}>➖</button> 
        </div>
      </div>
      <div className="info-container">
        <h2>{artwork.title}</h2>
        <p>Date: {artwork.date}</p>
        <p>Medium: {artwork.medium}</p>
        <p>Size: {artwork.size}</p>
        <p>Available for Sale: {artwork.availableForSale ? 'Yes' : 'No'}</p>
        <p>Prints Available: {artwork.printsAvailable}</p>
      </div>
    </div>
  );
}

export default DetailedView;


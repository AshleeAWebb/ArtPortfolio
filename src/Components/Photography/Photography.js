import React from 'react';
import '../Photography/Photography.css';
import albumData from '../data/albumData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Photography() {
  return (
    <div className="photography-container">
      <h1>Photography Page</h1>
      <div className="albums-container">
        {albumData.map((album) => (
          <Link to={`/album/${album.id}`} key={album.id}>
            <img src={album.coverImage} alt={album.title} className="album-cover" />
          </Link>
        ))}
      </div>
    </div>
  );
}


export default Photography;


import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import '../Album/Album.css';
import albumData from '../../data/albumData';

function Album() {
  const { id } = useParams();
  const album = albumData.find((album) => album.id === Number(id));
  const [coverImage, setCoverImage] = useState(album.coverImage); // Keep track of the cover image

  const handleImageClick = (imageSrc) => {
    setCoverImage(imageSrc); // Update the cover image when an image is clicked
  };

  return (
    <div className="album-container">
      <img
        src={coverImage}
        alt={album.title}
        className="album-cover"
      />
      <div className="album-images">
        {album.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="album-image"
            onClick={() => handleImageClick(image.src)} // Handle image click
          />
        ))}
      </div>
    </div>
  );
}

export default Album;


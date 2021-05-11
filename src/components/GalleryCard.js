import React from 'react';

const GalleryCard = ({
  title, description, imageURL, width,
}) => {
  return (
    <div
      className={`gallery-card ${width}`}
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="gallery-card-content">
        <h3 className="gallery-card-title">{title}</h3>
        <p className="gallery-card-description">{description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;

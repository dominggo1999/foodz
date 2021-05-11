import React from 'react';
import HeroContainer from '../components/HeroContainer';
import Reservation from '../components/Reservation';
import PhotoGallery from '../components/PhotoGallery';

const Gallery = () => {
  return (
    <>
      <HeroContainer route="gallery" />
      <PhotoGallery />
      <Reservation />
    </>
  );
};

export default Gallery;

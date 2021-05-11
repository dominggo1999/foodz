import React from 'react';
import GalleryCard from './GalleryCard';
import galleryData from '../data/gallery';
import createGrid from '../util/createGrid';
import Button from './Button';

const gallery = createGrid(galleryData);

const PhotoGallery = () => {
  return (
    <div className="photo-gallery">
      <div className="container">
        {
          gallery && gallery.map(({ id, ...restProps }) => {
            return (
              <GalleryCard
                key={id}
                {...restProps}
              />
            );
          })
        }

        {/* Kalau panjang array + 1 kelipatan sepuluh (9,19, 29, 39, ...) tambah 1 element ke akhir photo gallery */}
        {(gallery.length + 1) % 10 === 0 && <div className="magic-element"></div> }
        <div className="gallery-button">
          <Button type="orange">View More Images</Button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;

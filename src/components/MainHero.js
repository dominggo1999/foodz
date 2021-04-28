import React from 'react';
import Button from './Button';

const MainHero = () => {
  return (
    <>
      <div className="main-left">

        <img
          src="https://res.cloudinary.com/dv8aesvfs/image/upload/v1619429006/hero-1_mullcc.png"
          alt="Hero"
          className="hero-image"
        />

        <div className="hero-discount">
          <div className="hero-discount-detail">30%</div>
          <div className="hero-discount-detail">off</div>
        </div>

      </div>
      <div className="main-right">
        <h3 className="main-sub-1">Welcome to our</h3>
        <h1 className="main-sub-2">Delicious</h1>
        <h1 className="main-sub-3">Food Collection</h1>
        <p className="main-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className="buttons">
          <Button>About Us</Button>
          <Button type="orange">Our Menu</Button>
        </div>
      </div>
    </>
  );
};

export default MainHero;

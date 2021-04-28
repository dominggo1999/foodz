import React from 'react';
import Button from './Button';
import MainHero from './MainHero';

const Hero = ({ type }) => {
  return (
    <div className="hero">
      <div className="circle-background" />
      <div className="container">
        {
          type === 'main'
            ? <MainHero />
            : <p>Under construction</p>
        }
      </div>
    </div>
  );
};

export default Hero;

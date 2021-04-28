import React from 'react';
import MainHero from './MainHero';
import StandardHero from './StandardHero';

const HeroContainer = ({ type, route }) => {
  return (
    <div className="hero">
      <div className="circle-background" />
      <div className="container">
        {
          type === 'main'
            ? <MainHero />
            : <StandardHero route={route} />
        }
      </div>
    </div>
  );
};

export default HeroContainer;

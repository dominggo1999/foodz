import React from 'react';
import hero from '../data/hero';

const StandardHero = ({ route }) => {
  // Get data and image link
  const data = hero.filter((item) => item.route === route)[0];

  console.log(data.image);

  return (
    <>
      {data && (
      <>
        <div className="main-left">
          <div className="image-container">
            <img
              src={data.image}
              alt="Hero"
              className="hero-image hero-image-standard"
            />
          </div>
        </div>
        <div className="main-right">
          <h3 className="main-sub-1">Home - {data.title}</h3>
          <h1 className="main-sub-2">{data.title}</h1>
          <p className="main-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </>
      )}

    </>
  );
};

export default StandardHero;

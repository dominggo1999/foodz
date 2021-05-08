import React from 'react';
import { ReactComponent as Certificate } from '../assets/certificate.svg';
import { ReactComponent as Winner } from '../assets/winner.svg';
import { ReactComponent as Banner } from '../assets/banner.svg';
import { ReactComponent as Book } from '../assets/book.svg';
import { ReactComponent as Prize } from '../assets/prize.svg';

const OurAwards = () => {
  return (
    <div className="our-awards">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title-2">Our Awards</h2>
        </div>
        <div className="our-awards-wrapper">
          <div className="our-awards-card">
            <Certificate />
          </div>
          <div className="our-awards-card">
            <Winner />
          </div>
          <div className="our-awards-card">
            <Banner />
          </div>
          <div className="our-awards-card">
            <Book />
          </div>
          <div className="our-awards-card">
            <Prize />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAwards;

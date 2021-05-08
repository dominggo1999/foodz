import React from 'react';
import chefs from '../data/chefs';

const OurTeam = () => {
  return (
    <div className="our-team bg-grey">
      <div className="container">
        <div className="section-title-wrapper">
          <h4 className="section-title-1">Our Team</h4>
          <h2 className="section-title-2">Meet Our Team</h2>
        </div>
        <div className="our-team-wrapper">
          {chefs && chefs.map((chef) => (
            <div
              className="chef-card"
              key={chef.id}
            >
              <img
                src={chef.imageURL}
                alt=""
              />
              <p className="section-text">{chef.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

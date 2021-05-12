import React from 'react';
import { ReactComponent as Location } from '../assets/location.svg';
import { ReactComponent as Clock } from '../assets/clock.svg';
import { ReactComponent as Call } from '../assets/call.svg';

const Jumbotron4 = () => {
  return (
    <div className="jumbotron-4 bg-grey">
      <div className="container">
        <div className="jumbotron-4-card">
          <Clock />
          <p className="jumbotron-4-card-title">Work Time</p>
          <div className="jumbotron-4-card-content">
            <span>Monday-Friday</span>
            <span>11:00 - 00:00</span>
          </div>
        </div>
        <div className="jumbotron-4-card">
          <Call />
          <p className="jumbotron-4-card-title">Phone</p>
          <div className="jumbotron-4-card-content">
            <span>+61-455-4343-02</span>
            <span>+61-455-4343-87</span>
          </div>
        </div>
        <div className="jumbotron-4-card">
          <Location />
          <p className="jumbotron-4-card-title">Location</p>
          <div className="jumbotron-4-card-content">
            <span>54 Queen Street, Australia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron4;

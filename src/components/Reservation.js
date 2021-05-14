import React from 'react';
import Button from './Button';

// There is no form functionality yet

const Reservation = () => {
  return (
    <div className="reservation">
      <div className="container">
        <div className="section-title-wrapper">
          <h4 className="section-title-1">Book Now</h4>
          <h2 className="section-title-2">Reserve A Tabel</h2>
        </div>
        <div className="form-container">
          <form>
            <div className="input-fields">
              <input
                type="text"
                placeholder="Name"
                required
              />
              <input
                placeholder="Email"
                type="email"
                required
              />
              <input
                type="text"
                placeholder="Phone"
                required
              />
              <input
                type="date"
                value="2022-02-09"
                required
              />
              <input
                type="time"
                value="18:00"
                required
              />
              <input
                type="text"
                placeholder="Members"
                required
              />
            </div>
            <div className="reservation-input-button">
              <Button type="orange">Book Now</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;

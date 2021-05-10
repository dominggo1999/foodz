import React from 'react';
import Button from './Button';

const Jumbotron3 = () => {
  return (
    <div className="jumbotron-3">
      <div className="container">
        <div className="main">
          <h2 className="section-title-2">Get Discount On Fast Food</h2>
          <p className="section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi deleniti voluptatibus cum aperiam aspernatur, vero sequi cupiditate velit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas.</p>
          <div className="jumbotron-3-buttons">
            <Button>Contact Us</Button>
            <Button type="orange">Order Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron3;

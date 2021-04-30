import React from 'react';
import { ReactComponent as BookingIcon } from '../assets/booking.svg';
import { ReactComponent as DeliveryIcon } from '../assets/delivery.svg';
import { ReactComponent as DiscountIcon } from '../assets/save-money.svg';
import { ReactComponent as TrayIcon } from '../assets/tray.svg';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="about-us-left">
          <h4 className="section-title-1">
            About Us
          </h4>
          <h2 className="section-title-2">
            Why We Are The Best
          </h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sequi ut numquam ad commodi? Explicabo maiores perspiciatis illum id vel aliquid iste similique. Nulla quos voluptas cupiditate vitae velit laudantium ipsam voluptatibus incidunt eveniet autem.
          </p>
          <div className="about-us-cards">
            <div className="about-us-card">
              <BookingIcon />
              <p>Online Booking</p>
            </div>
            <div className="about-us-card">
              <DeliveryIcon />
              <p>Home Delivery</p>
            </div>
            <div className="about-us-card">
              <DiscountIcon />
              <p>Discount</p>
            </div>
            <div className="about-us-card">
              <TrayIcon />
              <p>Buffet Service</p>
            </div>
          </div>
        </div>
        <div className="about-us-right">
          <div className="about-us-image-container">
            <img
              src="https://images.pexels.com/photos/4590945/pexels-photo-4590945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Master Chef"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

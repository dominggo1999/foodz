import React from 'react';
import Button from './Button';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="section-title-wrapper">
          <h4 className="section-title-1">Contact Us Now</h4>
          <h2 className="section-title-2">Send Us a Message</h2>
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
                placeholder="Phone"
                type="text"
                required
              />
              <input
                type="email"
                placeholder="Email"
                required
              />
              <textarea
                name="User Message"
                id="userMessage"
                cols="30"
                rows="10"
                placeholder="Message"
              >
              </textarea>
            </div>
            <div className="reservation-input-button">
              <Button type="orange">Send Now</Button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;

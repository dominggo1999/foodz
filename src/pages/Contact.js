import React from 'react';
import HeroContainer from '../components/HeroContainer';
import Jumbotron4 from '../components/Jumbotron4';

const Contact = () => {
  return (
    <>
      <HeroContainer route="contact" />
      <Jumbotron4 />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d393.9994192922527!2d144.9574758!3d-37.8135778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4abeb36477%3A0xf41a264e33d2b15e!2sQueen%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sid!4v1620831459684!5m2!1sen!2sid"
        allowFullScreen=""
        loading="lazy"
        title="Location"
      >
      </iframe>
    </>
  );
};

export default Contact;

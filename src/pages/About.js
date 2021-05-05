import React from 'react';
import HeroContainer from '../components/HeroContainer';
import Reservation from '../components/Reservation';
import Testimonials from '../components/Testimonials';

const About = () => {
  return (
    <>
      <HeroContainer route="about" />
      <Testimonials />
      <Reservation />
    </>
  );
};

export default About;

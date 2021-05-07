import React from 'react';
import HeroContainer from '../components/HeroContainer';
import Reservation from '../components/Reservation';
import Testimonials from '../components/Testimonials';
import Jumbotron1 from '../components/Jumbotron1';

const About = () => {
  return (
    <>
      <HeroContainer route="about" />
      <Jumbotron1 />
      <Testimonials />
      <Reservation />
    </>
  );
};

export default About;

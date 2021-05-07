import React from 'react';
import HeroContainer from '../components/HeroContainer';
import Reservation from '../components/Reservation';
import Testimonials from '../components/Testimonials';
import Jumbotron1 from '../components/Jumbotron1';
import Jumbotron2 from '../components/Jumbotron2';

const About = () => {
  return (
    <>
      <HeroContainer route="about" />
      <Jumbotron1 />
      <Jumbotron2 />
      <Testimonials />
      <Reservation />
    </>
  );
};

export default About;

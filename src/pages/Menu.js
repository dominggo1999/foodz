import React from 'react';
import HeroContainer from '../components/HeroContainer';
import Reservation from '../components/Reservation';
import Testimonials from '../components/Testimonials';
import FeaturedMenu from '../components/FeaturedMenu';
import AllItems from '../components/AllItems';
import Jumbotron3 from '../components/Jumbotron3';

const Menu = () => {
  return (
    <>
      <HeroContainer route="menu" />
      <FeaturedMenu />
      <Jumbotron3 />
      <AllItems />
      <Testimonials />
      <Reservation />
    </>
  );
};

export default Menu;

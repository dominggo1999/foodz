import React from 'react';
import HeroContainer from '../components/HeroContainer';
import Reservation from '../components/Reservation';
import Testimonials from '../components/Testimonials';
import FeaturedMenu from '../components/FeaturedMenu';
import AllItems from '../components/AllItems';

const Menu = () => {
  return (
    <>
      <HeroContainer route="menu" />
      <FeaturedMenu />
      <AllItems />
      <Testimonials />
      <Reservation />
    </>
  );
};

export default Menu;

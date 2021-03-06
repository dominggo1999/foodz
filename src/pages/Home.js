import React from 'react';
import HeroContainer from '../components/HeroContainer';
import CategoryCard from '../components/CategoryCard';
import AboutUs from '../components/AboutUs';
import Reservation from '../components/Reservation';
import Testimonials from '../components/Testimonials';
import PopularItems from '../components/PopularItems';
import AllItems from '../components/AllItems';
import categories from '../data/categories';

const Home = () => {
  return (
    <>
      <HeroContainer type="main" />
      <div className="container category-container">
        <div className="category-cards">
          {
            categories && categories.map(({ id, ...restProps }) => (
              <CategoryCard
                key={id}
                {...restProps}
              />
            ))
          }
        </div>
      </div>
      <AboutUs />
      <PopularItems />
      <AllItems />
      <Testimonials />
      <Reservation />
    </>
  );
};

export default Home;

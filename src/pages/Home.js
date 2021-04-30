import React from 'react';
import HeroContainer from '../components/HeroContainer';
import CategoryCard from '../components/CategoryCard';
import AboutUs from '../components/AboutUs';
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
    </>
  );
};

export default Home;

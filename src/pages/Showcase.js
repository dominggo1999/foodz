import React from 'react';
import Button from '../components/Button';
import CategoryCard from '../components/CategoryCard';
import Footer from '../components/Footer';
import HeroContainer from '../components/HeroContainer';
import categories from '../data/categories';

const Showcase = () => {
  return (
    <div className="showcase">
      <HeroContainer type="main" />
      <div className="section-wrapper">
        <h3 className="wrapper-title">Button</h3>
        <div className="buttons">
          <Button>About Us</Button>
          <Button type="orange">Our Menu</Button>
          <Button type="green">Order Now</Button>
        </div>
      </div>
      <div className="section-wrapper">
        <h3 className="wrapper-title">Category Card</h3>
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
      <HeroContainer route="about" />
    </div>
  );
};

export default Showcase;

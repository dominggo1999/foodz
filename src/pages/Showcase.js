import React from 'react';
import Button from '../components/Button';
import CategoryCard from '../components/CategoryCard';
import categories from '../data/categories';

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="section-wrapper">
        <h3 className="wrapper-title">Button</h3>
        <div className="buttons">
          <Button>About Us</Button>
          <Button type="orange">Our Menu</Button>
          <Button type="green">Order Now</Button>
        </div>
      </div>

      <div className="sections-wrapper">
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
    </div>
  );
};

export default Showcase;

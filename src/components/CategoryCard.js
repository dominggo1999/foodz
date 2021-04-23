import React from 'react';
import Button from './Button';

const CategoryCard = ({ category, description, imageURL }) => {
  return (
    <div
      style={{ backgroundImage: `linear-gradient(90deg, rgba(68,78,94,0.77) 0%, rgba(1,34,79,0.78) 35%),  url(${imageURL})` }}
      className="category-card"
    >
      <h3 className="category-card-title">{category}</h3>
      <p className="category-card-description">{description}</p>
      <Button type="green">Order Now</Button>
    </div>
  );
};

export default CategoryCard;

import React from 'react';

const ItemNavigation = ({ className }) => {
  return (
    <ul className={`items-navigation ${className || ''}`}>
      <li>Breakfast</li>
      <li>Lunch</li>
      <li>Dinner</li>
      <li>Desserts</li>
      <li>Fast food</li>
      <li>Drink</li>
      <li>Soups</li>
    </ul>
  );
};

export default ItemNavigation;

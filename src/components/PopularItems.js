import React from 'react';
import { GoPlusSmall } from 'react-icons/go';
import items from '../data/items';
import PrintStars from './PrintStars';

const PopularItems = () => {
  return (
    <div className="popular-items">
      <div className="container">
        <div className="section-title-wrapper">
          <h4 className="section-title-1">Popular Items</h4>
          <h2 className="section-title-2">Featured Dishes</h2>
        </div>
        <div className="popular-items-wrapper">
          <ul className="popular-items-navigation">
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Desserts</li>
            <li>Fast food</li>
            <li>Drink</li>
            <li>Soups</li>
          </ul>

          {
            items && items.map((item, id) => (
              <div
                className="popular-items-card"
                key={item.id}
              >
                <div className="popular-items-image-container">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="popular-items-content">
                  <div className="popular-items-description">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">${item.price}</span>
                  </div>
                  <p className="item-description">{item.description}</p>
                  <span className="popular-items-description">
                    <div className="stars">
                      <PrintStars />
                    </div>
                    <div className="popular-items-plus-sign">
                      <GoPlusSmall />
                    </div>
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default PopularItems;

import React from 'react';
import { GoPlusSmall } from 'react-icons/go';
import PrintStars from './PrintStars';

const ItemCard1 = ({ item, type }) => {
  return (
    <div
      className={`item-card ${type || ''}`}
      key={item.id}
    >
      <div className="item-image-container">
        <img
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className="item-content">
        <div className="item-description">
          <span className="item-name">{item.name}</span>
          <span className="item-price">${item.price}</span>
        </div>
        <p className="item-description">{item.description}</p>
        <span className="stars-and-button">
          <div className="stars">
            <PrintStars />
          </div>
          <div className="item-plus-sign">
            <GoPlusSmall />
          </div>
        </span>
      </div>
    </div>
  );
};

export default ItemCard1;

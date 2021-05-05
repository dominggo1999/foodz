import React from 'react';

const ItemCard2 = ({ item }) => {
  return (
    <div
      className="item-card-2"
      key={item.id}
    >
      <div className="item-image-container">
        <div className="circle">
          <img
            src={item.image}
            alt={item.name}
          />
        </div>
      </div>
      <div className="item-content">
        <p className="item-name">{item.name}</p>
        <p className="item-description">{item.description}</p>
        <p className="item-order-now"><a href="/">Order now &rarr;</a> </p>
      </div>
    </div>
  );
};

export default ItemCard2;

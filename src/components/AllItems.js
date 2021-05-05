import React from 'react';
import Button from './Button';
import items from '../data/items';
import ItemCard2 from './ItemCard2';

const AllItems = () => {
  return (
    <div className="all-items bg-grey">
      <div className="container">
        <div className="section-title-wrapper">
          <h4 className="section-title-1">All Item</h4>
          <h2 className="section-title-2">Explore Our Menu</h2>
        </div>
        <div className="all-items-wrapper">
          <div className="all-items-menu">
            {
              items && items.map((item) => {
                return (
                  <ItemCard2
                    key={item.id}
                    item={item}
                  />
                );
              })
            }
          </div>
          <div className="all-items-button">
            <Button type="orange">All Items</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItems;

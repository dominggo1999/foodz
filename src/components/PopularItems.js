import React from 'react';
import items from '../data/items';
import ItemCard1 from './ItemCard1';
import ItemNavigation from './ItemNavigation';

const PopularItems = () => {
  return (
    <div className="popular-items">
      <div className="container">
        <div className="section-title-wrapper">
          <h4 className="section-title-1">Popular Items</h4>
          <h2 className="section-title-2">Featured Dishes</h2>
        </div>
        <div className="popular-items-wrapper">
          <ItemNavigation />
          {
            items && items.filter((item, id) => id < 3).map((item) => {
              return(
                <ItemCard1
                  key={item.id}
                  item={item}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default PopularItems;

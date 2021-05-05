import React from 'react';
import ItemNavigation from './ItemNavigation';
import items from '../data/items';
import ItemCard1 from './ItemCard1';

const FeaturedMenu = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="section-title-wrapper">
          <h4 className="section-title-1">Popular Items</h4>
          <h2 className="section-title-2">Featured Dishes</h2>
          <div className="featured-menu-wrapper">
            <ItemNavigation className="item-nav-featured" />
            <div className="featured-items">
              {
              items && items.map((item) => (
                <ItemCard1
                  key={item.id}
                  item={item}
                  type="card-featured"
                />
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMenu;

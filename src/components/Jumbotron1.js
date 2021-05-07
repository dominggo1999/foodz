import React from 'react';
import { ReactComponent as Salad } from '../assets/salad.svg';
import { ReactComponent as Dish } from '../assets/dish.svg';
import { ReactComponent as Cooking } from '../assets/cooking.svg';

const Jumbotron1 = () => {
  return (
    <div className="jumbotron-1">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title-2">We Offer Best Way To Eat Delicious Food</h2>
        </div>
        <div className="jumbotron-1-wrapper">
          <div className="jumbotron-item">
            <Salad />
            <p className="jumbotron-item-text">
              Healthy Food
            </p>
          </div>
          <div className="jumbotron-item">
            <Dish />
            <p className="jumbotron-item-text">
              Great Taste
            </p>
          </div>
          <div className="jumbotron-item">
            <Cooking />
            <p className="jumbotron-item-text">
              Fast Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron1;

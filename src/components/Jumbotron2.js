import React from 'react';
import Button from './Button';

const Jumbotron2 = () => {
  return (
    <div className="jumbotron-2">
      <div className="container">
        <div className="jumbotron-2-left">
          <h2 className="section-title-2">We Offer Best Way To Eat Delicious Food</h2>
          <p className="section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorem aspernatur laborum recusandae voluptatibus officia minus neque atque minima tenetur quae excepturi necessitatibus repellat nulla? Voluptas eligendi sequi natus cumque ipsum quia officiis minus! Facere nemo nam modi itaque quam totam in nostrum repellendus exercitationem qui reiciendis impedit, quisquam dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, alias.</p>
          <Button type="orange">Our Menu</Button>
        </div>
        <div className="jumbotron-2-right">
          <img
            src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Makan Bang"
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron2;

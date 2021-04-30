import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Testimonials = () => {
  const printStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      stars.push(<AiFillStar key={i} />);
    }

    return stars;
  };

  return (
    <div className="testimonials">
      <div className="container">
        <div className="section-title-wrapper">
          <h4 className="section-title-1">Testimonials</h4>
          <h2 className="section-title-2">What Costumers Say</h2>
        </div>
        <div className="testimonials-wrapper">
          <div className="testimonials-left">
            <div className="testimonials-image-container">
              <img
                src="https://images.pexels.com/photos/2323183/pexels-photo-2323183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Foodz Testimony"
              />
            </div>
          </div>
          <div className="testimonials-right">
            <div className="testimonials-quote-icon"><ImQuotesLeft /> </div>
            <div className="testimonials-testimony quote">
              &quot;
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam soluta omnis officia quis animi suscipit delectus fugiat maxime vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, esse!
              &quot;
            </div>
            <div className="testimonials-stars">
              {printStars()}
            </div>
            <div className="testimonials-said-by">
              <span className="testimonials-name">Alina Parker, </span>
              <span className="testimonials-position">CEO, XYZ</span>
            </div>
            <div className="testimonials-nav-arrow">
              <button>
                <AiOutlineArrowLeft />
              </button>
              <button>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

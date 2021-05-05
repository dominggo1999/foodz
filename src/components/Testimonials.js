import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { connect } from 'react-redux';
import PrinStars from './PrintStars';
import { testimonialNext, testimonialPrev } from '../redux/testimonial/testimonialActions';
import testimonials from '../data/testimonials';

const Testimonials = ({ position, testimonialNext, testimonialPrev }) => {
  const testimonial = testimonials[position];

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
                src={testimonial.imageURL}
                alt="Foodz Testimony"
              />
            </div>
          </div>
          <div className="testimonials-right">
            <div className="testimonials-quote-icon"><ImQuotesLeft /> </div>
            <div className="testimonials-testimony quote">
              &quot;
              {testimonial.quote}
              &quot;
            </div>
            <div className="testimonials-stars stars">
              <PrinStars />
            </div>
            <div className="testimonials-said-by">
              <span className="testimonials-name">{testimonial.name}, </span>
              <span className="testimonials-position">{testimonial.position}, {testimonial.company}</span>
            </div>
            <div className="testimonials-nav-arrow">
              <button>
                <AiOutlineArrowLeft onClick={testimonialPrev} />
              </button>
              <button onClick={testimonialNext}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   displayNavbarMobile: state.navbar.displayNavbarMobile,
// });

// const mapDispatchToProps = (dispatch) => ({
//   toggleNavbar: () => dispatch(toggleNavbar()),
// });

const mapStateToProps = (state) => ({
  position: state.testimonial.position,
});

const mapDispatchToProps = (dispatch) => ({
  testimonialNext: () => dispatch(testimonialNext(testimonials)),
  testimonialPrev: () => dispatch(testimonialPrev(testimonials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);

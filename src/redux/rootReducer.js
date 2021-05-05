import { combineReducers } from 'redux';
import navbarReducer from './navbar/navbarReducer';
import testimonialReducer from './testimonial/testimonialReducer';

export default combineReducers({
  navbar: navbarReducer,
  testimonial: testimonialReducer,
});

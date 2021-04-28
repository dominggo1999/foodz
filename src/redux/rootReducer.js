import { combineReducers } from 'redux';
import navbarReducer from './navbar/navbarReducer';

export default combineReducers({
  navbar: navbarReducer,
});

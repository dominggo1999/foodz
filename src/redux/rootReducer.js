import { combineReducers } from 'redux';
import navbarReducer from './test/navbarReducer';

export default combineReducers({
  navbar: navbarReducer,
});

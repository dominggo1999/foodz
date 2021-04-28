import { navbarActionTypes } from './navbarActionTypes';

const { TOGGLE_NAVBAR } = navbarActionTypes;

const INITIAL_STATE = {
  displayNavbarMobile: false,
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        displayNavbarMobile: !state.displayNavbarMobile,
      };
    default:
      return state;
  }
};

export default testReducer;

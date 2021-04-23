import { testActionTypes } from './testActionTypes';

const { SET_CURRENT_STATUS } = testActionTypes;

const INITIAL_STATE = {
  currentStatus: false,
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_STATUS:
      return {
        currentStatus: true,
      };
    default:
      return state;
  }
};

export default testReducer;

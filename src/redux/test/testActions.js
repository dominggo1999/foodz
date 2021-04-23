// Actions creator untuk nantinya di dispatch

import { testActionTypes } from './testActionTypes';

const { SET_CURRENT_STATUS } = testActionTypes;

// Eksport masing2 action

export const setCurrentStatus = (test) => ({
  type: SET_CURRENT_STATUS,
  payload: test,
});

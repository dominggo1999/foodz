// Actions creator untuk nantinya di dispatch

import { navbarActionTypes } from './navbarActionTypes';

const { TOGGLE_NAVBAR } = navbarActionTypes;

// Eksport masing2 action

export const toggleNavbar = () => ({
  type: TOGGLE_NAVBAR,
});

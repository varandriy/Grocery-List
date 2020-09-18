import { SET_ITEMS } from '../actions/entriesActions';

const initialState = [];

export const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return action.payload;
  }
  return state;
};

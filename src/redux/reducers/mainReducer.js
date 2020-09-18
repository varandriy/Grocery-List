import { combineReducers } from 'redux';
import { entriesReducer } from './entriesReducer';

export const mainReducer = combineReducers({
  entries: entriesReducer,
});

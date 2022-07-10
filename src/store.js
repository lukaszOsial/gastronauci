import { createStore, combineReducers } from 'redux';

import { restaurantsReducer } from '../src/components/Pages/Order/Features/restaurantsSlice.js';


const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
});
export const store = createStore(rootReducer);
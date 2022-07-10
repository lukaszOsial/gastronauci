import { restaurantsData } from '../../../../data.js';

export const loadData = (data) => {
  return {
    type: 'restaurant/loadData',
    payload: restaurantsData,
  };
};

const initialRestaurants = [];
export const restaurantsReducer = (restaurants = initialRestaurants, action) => {
  switch (action.type) {
    case 'restaurant/loadData': {
      return action.payload;
    }
    default: {
      return restaurants;
    }
  }
};


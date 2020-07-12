import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
  collections: SHOP_DATA
}

// return a new state in pure form
const shopReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default shopReducer;
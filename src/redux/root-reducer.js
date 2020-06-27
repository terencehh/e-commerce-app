/*
Stores all the global state of our application by combining all reducers
*/
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// export root reducer object as key : value prop
export default combineReducers({
  user: userReducer,
  cart: cartReducer
})
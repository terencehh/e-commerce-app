/*
Stores all the global state of our application by combining all reducers
*/

import { persistReducer } from 'redux-persist';
// retrieve localStorage obj from browser
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


const persistConfig = {
  key: 'root',
  storage,
  // arr containing str name of any reducers we want to store
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

// export root reducer object with persistence capabilities
export default persistReducer(persistConfig, rootReducer)
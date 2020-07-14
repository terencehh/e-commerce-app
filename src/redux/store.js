import { createStore, applyMiddleware } from 'redux';
// let browser cache the store
import { persistStore } from 'redux-persist';
// add useful middleware to our store for debugging
import logger from 'redux-logger';
import rootReducer from './root-reducer';

// middlewares are functions that catch actions, performs some actions, then returns the actions
const middlewares = [];

// set development middlewares
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);

export default { store, persistor };
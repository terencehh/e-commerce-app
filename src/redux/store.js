import { createStore, applyMiddleware } from 'redux';
// let browser cache the store
import { persistStore } from 'redux-persist';
// add useful middleware to our store for debugging
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);

export default { store, persistor };
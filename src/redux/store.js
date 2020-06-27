import { createStore, applyMiddleware } from 'redux';
// add useful middleware to our store for debugging
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
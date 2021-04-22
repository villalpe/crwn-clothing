import { createStore, applyMiddleware } from 'redux';
//Middleware
import logger from 'redux-logger';
//Root Reducer we create
import rootReducer from './root-reducer';

//The middleware would be an Array
const middlewares = [logger];
//Create the Store
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;

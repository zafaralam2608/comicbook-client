import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger/src';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(promise, thunk, logger));

export default store;

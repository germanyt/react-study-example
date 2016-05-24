import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger'

import messageApp from '../reducers';

let logger = createLogger();

let createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
let store = createStoreWithMiddleware(messageApp);


// let store = createStore(messageApp);

export default store;
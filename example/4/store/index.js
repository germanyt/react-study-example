import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import messageApp from '../reducers';

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(messageApp);


// let store = createStore(messageApp);

export default store;
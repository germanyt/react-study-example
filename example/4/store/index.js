import { createStore } from 'redux';
import messageApp from '../reducers';

let store = createStore(messageApp);

export default store;
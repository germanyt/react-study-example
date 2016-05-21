import { combineReducers } from 'redux';

import * as reducers from './message.reducer';

const messageApp = combineReducers( reducers );

export default messageApp;
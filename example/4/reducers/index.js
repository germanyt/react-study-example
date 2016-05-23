import { combineReducers } from 'redux';

import message from './message.reducer';
import filter from './filter.reducer';

const messageApp = combineReducers( {
	message,
	filter
} );

export default messageApp;
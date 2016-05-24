import { combineReducers } from 'redux';

import message from './message.reducer';
import filter from './filter.reducer';
import getTime from './gettime.reducer';

const messageApp = combineReducers( {
	message,
	filter,
	getTime
} );

export default messageApp;
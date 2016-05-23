import { INPUT_FILTER_KEY } from '../actions/constants';

const initState = {
	key: ''
};

export default function filter(state = initState, action) {
	switch(action.type) {
		case INPUT_FILTER_KEY:
			let key = action.key || '';
			return {...state, key};
		default:
			return state;
	}
}
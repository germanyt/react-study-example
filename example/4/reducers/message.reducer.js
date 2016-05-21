import {ADD_MESSAGE} from '../actions/';

const initState = {
	list: []
};

export function Message(state = initState, action) {
	switch(action.type){
		case ADD_MESSAGE:
			// return Object.assign({}, state, {
			// 	list: [...state.list, action.data]
			// });

			let list = [...state.list, action.data];

			return { ...state, list };
		default:
			return state;
	}
}
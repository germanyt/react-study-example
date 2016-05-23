import {ADD_MESSAGE, DELETE_MESSAGE} from '../actions/constants';

const initState = []

export default function message(state = initState, action) {
	switch(action.type){
		case ADD_MESSAGE:
			// return Object.assign({}, state, {
			// 	list: [...state.list, action.data]
			// });

			return [...state, action.data];
			// return { ...state, list };
		case DELETE_MESSAGE:
			let index = action.index;
			if(index >= 0 && index < state.list.length){
				return [...state.slice(0, index), ...state.list.slice(index+1)];
				// return {...state, list};
			}

			return state;
		default:
			return state;
	}
}
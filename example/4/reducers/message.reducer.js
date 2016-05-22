import {ADD_MESSAGE, DELETE_MESSAGE} from '../actions/constants';

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
		case DELETE_MESSAGE:
			let index = action.index;
			if(index >= 0 && index < state.list.length){
				let list = [...state.list.slice(0, index), ...state.list.slice(index+1)];
				return {...state, list};
			}

			return state;
		default:
			return state;
	}
}
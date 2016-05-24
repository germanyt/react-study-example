import { GET_TIME_REQUEST, GET_TIME_FAILURE, GET_TIME_SUCCESS, GET_TIME_ERROR_CLEAR } from '../actions/constants';

const initState = {
	loading: false,
	errorInfo: ''
};

export default function getTime(state = initState, action) {
	let loading = false;
	let errorInfo = '';
	switch(action.type) {
		case GET_TIME_REQUEST:
			loading = true;
			return {...state, loading};
		case GET_TIME_FAILURE:
		case GET_TIME_SUCCESS:
			loading = false;
			
			if(action.error){
				errorInfo = JSON.stringify(action.error);
			} else {
				errorInfo = '';
			}
			return {...state, loading, errorInfo};
		case GET_TIME_ERROR_CLEAR:
			errorInfo = '';
			return {...state, errorInfo};
		default:
			return state;
	}
}
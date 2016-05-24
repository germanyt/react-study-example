import { ADD_MESSAGE, DELETE_MESSAGE, INPUT_FILTER_KEY, GET_TIME_REQUEST, GET_TIME_FAILURE, GET_TIME_SUCCESS, GET_TIME_ERROR_CLEAR } from './constants';

import moment from 'moment';

export function addMessage(data) {
  // return {
  //   type: ADD_MESSAGE,
  //   data
  // };

  return dispatch => {
    dispatch( getTimeRequest() );
    getTime().then(time => {
      dispatch( getTimeSuccess() );

      data.create_time = time;

      dispatch( addMessageToStore(data) );

    }).catch(error => dispatch( getTimeFailure(error && error.message || error) ));
  }

}

function addMessageToStore(data) {
  return {
    type: ADD_MESSAGE,
    data
  };
}

export function deleteMessage(index) {
	return {
		type: DELETE_MESSAGE,
		index
	}
}

function getTimeRequest() {
  return {
    type: GET_TIME_REQUEST
  }
}

function getTimeFailure(error) {
  return {
    type: GET_TIME_FAILURE,
    error
  }
}

function getTimeSuccess(data) {
  return {
    type: GET_TIME_SUCCESS,
    data
  }
}

export function getTimeErrorClear (){
  return {
    type: GET_TIME_ERROR_CLEAR
  }
}

function getTime(data){
	return new Promise(function(resolve, reject){
    let time = moment().format('YYYY-MM-DD HH:mm:ss');

		resolve(time);
	});
}


export function inputFilterKey(key) {
  return {
    type: INPUT_FILTER_KEY,
    key
  }
}

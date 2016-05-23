import { ADD_MESSAGE, DELETE_MESSAGE, INPUT_FILTER_KEY } from './constants';

import moment from 'moment';

export function addMessage(data) {
  // return {
  //   type: ADD_MESSAGE,
  //   data
  // };

  return dispatch => {
    getTime(data).then(data => {

      dispatch(addMessageToStore(data));

    }).catch(error => console.log(error));
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

function getTime(data){
	return new Promise(function(resolve, reject){
		let time = moment().format('YYYY-MM-DD HH:mm:ss');

		data.create_time = time;

		resolve(data);
	});
}


export function inputFilterKey(key) {
  return {
    type: INPUT_FILTER_KEY,
    key
  }
}

import {ADD_MESSAGE} from './constants';

export function addMessage(data) {
  return {
    type: ADD_MESSAGE,
    data
  };
}

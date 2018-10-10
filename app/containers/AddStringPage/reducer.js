/*
 *
 * AddStringPage reducer
 *
 */

import { fromJS } from 'immutable';
import { ADD_STRING, ADD_STRING_SUCCESS, ADD_STRING_ERROR } from './constants';

export const initialState = fromJS({
  newString: '',
});

function addStringPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STRING:
      return state.set('newString', action.newString);
    case ADD_STRING_SUCCESS:
      return state;
    case ADD_STRING_ERROR:
      return state;
    default:
      return state;
  }
}

export default addStringPageReducer;

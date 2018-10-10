/*
 *
 * AddStringPage actions
 *
 */

import { ADD_STRING, ADD_STRING_SUCCESS, ADD_STRING_ERROR } from './constants';

export function addNewString(s) {
  return {
    type: ADD_STRING,
    newString: s,
  };
}

export function addNewStringSuccess() {
  return {
    type: ADD_STRING_SUCCESS,
  };
}

export function addNewStringError(error) {
  return {
    type: ADD_STRING_ERROR,
    error,
  };
}

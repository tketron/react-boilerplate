import {
  addNewString,
  addNewStringSuccess,
  addNewStringError,
} from '../actions';
import { ADD_STRING, ADD_STRING_SUCCESS, ADD_STRING_ERROR } from '../constants';

describe('AddStringPage actions', () => {
  describe('addNewString action', () => {
    it('has a type of ADD_STRING', () => {
      const expected = {
        type: ADD_STRING,
      };
      expect(addNewString().type).toEqual(expected.type);
    });

    it('returns the new string', () => {
      const expected = {
        type: ADD_STRING,
        newString: 'test string',
      };
      expect(addNewString('test string')).toEqual(expected);
    });
  });

  describe('addNewStringSuccess action', () => {
    it('has a type of ADD_STRING_SUCCESS', () => {
      const expected = {
        type: ADD_STRING_SUCCESS,
      };
      expect(addNewStringSuccess().type).toEqual(expected.type);
    });
  });

  describe('addNewStringError action', () => {
    it('has a type of ADD_STRING_ERROR', () => {
      const expected = {
        type: ADD_STRING_ERROR,
      };
      expect(addNewStringError().type).toEqual(expected.type);
    });
  });
});

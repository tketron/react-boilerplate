import { fromJS } from 'immutable';
import addStringPageReducer from '../reducer';

describe('addStringPageReducer', () => {
  it('returns the initial state', () => {
    expect(addStringPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

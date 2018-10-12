import addStringPageReducer from '../reducer';
import { addNewString } from '../actions';

describe('addStringPageReducer', () => {
  it('returns the initial state', () => {
    expect(addStringPageReducer(undefined, {})).toMatchSnapshot();
  });

  it('handles the addString action', () => {
    expect(
      addStringPageReducer(undefined, addNewString('test string')),
    ).toMatchSnapshot();
  });
});

import { fromJS } from 'immutable';
import { selectAddStringPageDomain } from '../selectors';

describe('selectAddStringPageDomain', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      addStringPage: globalState,
    });
    expect(selectAddStringPageDomain(mockedState)).toEqual(globalState);
  });
});

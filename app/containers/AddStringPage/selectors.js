import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addStringPage state domain
 */

const selectAddStringPageDomain = state =>
  state.get('addStringPage', initialState);

/**
 * Other specific selectors
 */

const makeSelectNewString = () =>
  createSelector(selectAddStringPageDomain, addStringState =>
    addStringState.get('newString'),
  );

/**
 * Default selector used by AddStringPage
 */

const makeSelectAddStringPage = () =>
  createSelector(selectAddStringPageDomain, substate => substate.toJS());

export default makeSelectAddStringPage;
export { selectAddStringPageDomain, makeSelectNewString };

/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectViewStringsPageDomain = state =>
  state.get('viewstrings', initialState);

const makeSelectStrings = () =>
  createSelector(selectViewStringsPageDomain, viewStringState =>
    viewStringState.get('strings'),
  );

export { makeSelectStrings };

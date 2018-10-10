/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('viewstrings');

const selectRoute = state => state.get('route');

const makeSelectStrings = () =>
  createSelector(selectGlobal, globalState => globalState.get('strings'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

export {
  selectGlobal,
  selectRoute,
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
};

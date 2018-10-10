import React from 'react';
import { compose } from 'redux';

import injectSaga from '../../utils/injectSaga';
import { RESTART_ON_REMOUNT } from '../../utils/constants';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
class ViewStringsPage extends React.Component {
  render() {
    return <h1>View Strings Page</h1>;
  }
}

const withSaga = injectSaga({
  key: 'viewstringspage',
  saga,
  mode: RESTART_ON_REMOUNT,
});

export default compose(withSaga)(ViewStringsPage);

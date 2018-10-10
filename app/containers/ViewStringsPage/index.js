import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadStrings } from './actions';

/* eslint-disable react/prefer-stateless-function */
class ViewStringsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>View Strings Page</h1>
        {this.props.strings.map(s => <p key={s.id}>{s.string}</p>)}
      </div>
    );
  }
}

ViewStringsPage.propTypes = {
  strings: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    onLoad: dispatch(loadStrings()),
  };
}

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'viewstrings', reducer });
const withSaga = injectSaga({
  key: 'viewstrings',
  saga,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ViewStringsPage);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import { makeSelectStrings } from './selectors';
import { loadStrings } from './actions';

import ViewStringsContainer from './ViewStringsContainer';
import StringContainer from './StringContainer';

/* eslint-disable react/prefer-stateless-function */
class ViewStringsPage extends React.Component {
  render() {
    return (
      <ViewStringsContainer>
        {this.props.strings.map(s => (
          <StringContainer key={s.id} fontSize={`${Math.random() * 30 + 8}px`}>
            {s.string}
          </StringContainer>
        ))}
      </ViewStringsContainer>
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

/**
 *
 * AddStringPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddStringPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import { addNewString } from './actions';

import AddStringContainer from './AddStringContainer';
import Input from './Input';
import AddStringButton from './AddStringButton';

/* eslint-disable react/prefer-stateless-function */
export class AddStringPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newString: '',
      errormessage: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newString != '') {
      this.props.onAddString(this.state.newString);
      this.setState({
        newString: '',
        errormessage: '',
      });
    } else {
      this.setState({
        errormessage: 'Please add a new string',
      });
    }
  };

  render() {
    return (
      <AddStringContainer>
        <Input
          type="text"
          name="newString"
          value={this.state.newString}
          onChange={this.handleChange}
          inputColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
        />
        <AddStringButton onClick={this.handleSubmit}>Add It!</AddStringButton>
        <div>{this.state.errormessage}</div>
      </AddStringContainer>
    );
  }
}

AddStringPage.propTypes = {
  dispatch: PropTypes.func,
  onAddString: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  addstringpage: makeSelectAddStringPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddString: s => dispatch(addNewString(s)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'addStringPage', reducer });
const withSaga = injectSaga({ key: 'addStringPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddStringPage);

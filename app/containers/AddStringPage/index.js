/**
 *
 * AddStringPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddStringPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { addNewString } from './actions';

// import NewStringForm from '../../components/NewStringForm';
// import Form from './Form';
import Input from './Input';

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
      <div>
        <FormattedMessage {...messages.header} />
        <Input
          type="text"
          name="newString"
          value={this.state.newString}
          onChange={this.handleChange}
          inputColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
        />
        {/* <input
          type="text"
          name="newString"
          value={this.state.newString}
          onChange={this.handleChange}
        /> */}
        <button onClick={this.handleSubmit}>Add It!</button>
        <div>{this.state.errormessage}</div>
        {/* <Form>
          <Input />
        </Form> */}
        {/* <NewStringForm handleStringSubmit={s => this.onAddNewString(s)} /> */}
      </div>
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

/**
 *
 * NewStringForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class NewStringForm extends React.Component {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <form>
          <input type="text" className="text" />
          <button>Add It!</button>
        </form>
      </div>
    );
  }
}

NewStringForm.propTypes = {};

export default NewStringForm;

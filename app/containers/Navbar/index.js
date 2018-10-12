import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';
import NavbarContainer from './NavbarContainer';
import NavbarLink from './NavbarLink';
// import { makeSelectStrings } from '../ViewStringsPage/selectors';
// import { loadStrings } from '../ViewStringsPage/actions';
// import injectReducer from '../../utils/injectReducer';
// import reducer from '../ViewStringsPage/reducer';
// import injectSaga from '../../utils/injectSaga';
// import saga from '../ViewStringsPage/saga';

/* eslint-disable react/prefer-stateless-function */
class Navbar extends React.Component {
  render() {
    return (
      <NavbarContainer>
        <NavbarLink to="/new" href="/new">
          Add a new String
        </NavbarLink>
        <NavbarLink to="/all" href="/all">
          View all the strings
        </NavbarLink>
      </NavbarContainer>
    );
  }
}

// Navbar.propTypes = {
//   strings: PropTypes.array,
// };

// const mapStateToProps = createStructuredSelector({
//   strings: makeSelectStrings(),
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     onLoad: dispatch(loadStrings()),
//   };
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

// const withReducer = injectReducer({ key: 'viewstrings', reducer });
// const withSaga = injectSaga({
//   key: 'viewstrings',
//   saga,
// });

// export default compose(
//   withReducer,
//   withSaga,
//   withConnect,
// )(Navbar);

export default Navbar;

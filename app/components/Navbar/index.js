import React from 'react';
import NavbarContainer from './NavbarContainer';
import NavbarLink from './NavbarLink';

/* eslint-disable react/prefer-stateless-function */
export default class Navbar extends React.Component {
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

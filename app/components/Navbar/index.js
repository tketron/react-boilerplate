import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/" href="/">
          Home
        </Link>
        <Link to="/new" href="/new">
          Add a new String
        </Link>
        <Link to="/all" href="/all">
          View all the strings
        </Link>
      </div>
    );
  }
}

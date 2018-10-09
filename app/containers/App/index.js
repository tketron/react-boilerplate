/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AddStringPage from '../AddStringPage';
import ViewStringsPage from '../ViewStringsPage';

export default function App() {
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
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/new" component={AddStringPage} />
        <Route exact path="/all" component={ViewStringsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

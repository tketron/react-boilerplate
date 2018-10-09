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
import { Switch, Route, Redirect } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AddStringPage from '../AddStringPage';
import ViewStringsPage from '../ViewStringsPage';
import Navbar from '../../components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Redirect exact from="/" to="/all" />
        <Route exact path="/new" component={AddStringPage} />
        <Route exact path="/all" component={ViewStringsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

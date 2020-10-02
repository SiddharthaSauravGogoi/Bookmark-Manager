import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Repositories from '../Repositories/index.jsx';
import Search from '../Search/index.jsx';

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Repositories />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

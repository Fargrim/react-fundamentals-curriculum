import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
// import Main from '../components/Main';
import HelloWorld from '../components/HelloWorld';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={HelloWorld}></Route>
  </Router>
);

export default routes;
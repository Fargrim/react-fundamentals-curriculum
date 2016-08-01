import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import ForecastContainer from '../containers/ForecastContainer';
import ForecastDetailContainer from '../containers/ForecastDetailContainer';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='forecast/:city' header='Forecast' component={ForecastContainer} />
      <Route path='detail/:city' header='Detail' component={ForecastDetailContainer} />
    </Route>
  </Router>
);

export default routes;
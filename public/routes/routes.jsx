import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Home from '../components/Home';
import Main from '../components/Main';
import Login from '../components/navbar/Login';
import Register from '../components/navbar/Register';
import Logout from '../components/navbar/Logout';
import DonationPage from '../components/Donation-Page';
import requireAuth from '../util/auth';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="register" component={Register} />
      <Route path="donation-page" component={DonationPage} onEnter={requireAuth} />
    </Route>
  </Router>
);

module.exports = routes;

import React from 'react';
import { ReactRouter, Router, Route, hashHistory, IndexRoute } from 'react-router';

import Home from '../Home.jsx';
import Main from '../Main.jsx';
import Login from '../components/navbar/Login.jsx';
import Register from '../components/navbar/Register.jsx';
import Logout from '../components/navbar/Logout.jsx';
import DonationPage from '../components/Donation-Page.jsx';
import requireAuth from '../util/auth.jsx';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="register" component={Register} />
      <Route path="donation-page" component={DonationPage} onEnter={requireAuth} />
    </Route>
  </Router>
);

module.exports = routes;
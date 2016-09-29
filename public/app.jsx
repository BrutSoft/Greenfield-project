import React from 'react';
import ReactDOM from 'react-dom';
import { ReactRouter, Router, Route, hashHistory, IndexRoute } from 'react-router';
import Layout from './components/Layout.jsx';
import Login from './components/navbar/Login.jsx';
import Register from './components/navbar/Register.jsx';
import Logout from './components/navbar/Logout.jsx';
import DonationPage from './components/Donation-Page.jsx';
import requireAuth from './util/auth.jsx';

console.log('hello from react');

var App = React.createClass({

  render() {
    console.log('Hello from Render');
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Layout} />
          <Route path="login" component={Login} />
          <Route path="logout" component={Logout} />
          <Route path="register" component={Register} />
          <Route path="donation-page" component={DonationPage} onEnter={requireAuth} />
        </Route>
      </Router>
    );
  }
<<<<<<< HEAD
}
=======
});
>>>>>>> added donation page, finished skeleton for the login, register

ReactDOM.render(<App />, app);

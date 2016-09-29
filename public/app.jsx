import React from 'react';
import ReactDOM from 'react-dom';
import { ReactRouter, Router, Route, hashHistory, IndexRoute } from 'react-router';
import Layout from './components/Layout.jsx';
import Login from './components/navbar/Login.jsx';
import Register from './components/navbar/Register.jsx';
import Logout from './components/navbar/Logout.jsx';
import Admin from './components/navbar/Admin.jsx';

import firebase from 'firebase';
import config from '../firebase.config.js';
firebase.initializeApp(config);

console.log('hello from react');

class App extends React.Component {

  render() {
    console.log('Hello from Render');
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Layout} />
          <Route path='login' component={Login} />
          <Route path='register' component={Register} />
          <Route path='logout' component={Logout} />
          <Route path='admin' component={Admin} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App />, app);

import React from 'react';
import Login from './Login.jsx';
import Admin from './Admin.jsx';
import Logout from './Logout.jsx';
import Register from './Register.jsx';

export default class Navbar extends React.Component {
  render () {
    return (
      <nav>
        <Login />
        <Register />
        <Admin />
        <Logout />
      </nav>
    );
  }
};
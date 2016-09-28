import React from 'react';
import Login from './Login.jsx';
import Admin from './Admin.jsx';
import Logout from './Logout.jsx';

export default class Navbar extends React.Component {
  render () {
    return (
      <nav>
        <Login />
        <Admin />
        <Logout />
      </nav>
    );
  }
};
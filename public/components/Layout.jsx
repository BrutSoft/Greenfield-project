import React from 'react';
import Navbar from './navbar/Navbar.jsx';

var Layout = React.createClass({
  render () {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
});

module.exports = Layout;
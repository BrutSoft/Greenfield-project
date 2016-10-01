import React from 'react';
import firebase from 'firebase';

const Logout = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState: function () {
    return {
      error: false,
    };
  },
  componentDidMount: function () {
    firebase.auth().signOut();
    this.setState({ loggedIn: false });
  },
  render: function () {
    return <p>You are now logged out</p>;
  },
});

module.exports = Logout;

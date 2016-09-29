import React from 'react';
import { Router, Link } from 'react-router';
import firebase from 'firebase';

var Navbar = React.createClass({
  getInitialState() {
      return {
          loggedIn: (null !== firebase.auth().currentUser)  
      };
  },
  componentWillMount() {
      firebase.auth().onAuthStateChanged(firebaseUser => {
        this.setState({
          loggedIn: (null !== firebaseUser)
        })
        if (firebaseUser) {
          console.log('Logged in ', firebaseUser);
        } else {
          console.log('Not logged in');
        }
      }); 
  },
  render () {
    var loginOrOut;
    var register;
    if (this.state.loggedIn) {
      loginOrOut = <li><Link to='/logout'><button>Logout</button></Link></li>;
      register = null
    } else {
      loginOrOut = <li><Link to='/login'><button>Login</button></Link></li>;
      register = <li><Link to='/register'><button>Register</button></Link></li>;
    }
    return (
      <span>
        <nav className='navbar'>
          <div className='container'>
            <div className='navbar-title'>
              <h1>OPERATION SPARK DONATION PAGE</h1>
            </div>
            <ul>
              {register}
              {loginOrOut}
            </ul>
          </div>
        </nav>
      </span>
    )
  }
});

module.exports = Navbar;
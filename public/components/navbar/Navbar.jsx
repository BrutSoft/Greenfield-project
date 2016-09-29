import React from 'react';
import { Router, Link } from 'react-router';
import firebase from 'firebase';

var Navbar = React.createClass({
    getInitialState: function() {
        return {
            loggedIn: (null !== firebase.auth().currentUser)
        }
    },
    componentWillMount: function() {
        firebase.auth().onAuthStateChanged(firebaseUser => {

            this.setState({
                loggedIn: (null !== firebaseUser)
            })

            if (firebaseUser) {
                console.log("Logged IN", firebaseUser);
            } else {
                console.log('Not logged in');
            }
        });
    },
    render: function() {
        var loginOrOut;
        var register;
        if (this.state.loggedIn) {
            loginOrOut = <li>
                <Link to="/logout" className="navbar-brand">Logout</Link>
            </li>;
            register = null
        } else {
            loginOrOut = <li>
                <Link to="/login" className="navbar-brand">Login</Link>
            </li>;
            register = <li>
                <Link to="/register" className="navbar-brand">
                    Register
                </Link>
            </li>;
        }
        return (
            <span>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">
                                OPERATION SPARK DONATION PAGE
                            </Link>
                        </div>
                        <ul className="nav navbar-nav pull-right">
                            <li>
                                <Link to="/" className="navbar-brand">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/donation-page" className="navbar-brand">
                                    Donation Page
                                </Link>
                            </li>
                            {register}
                            {loginOrOut}
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </span>
        )
    }
});

module.exports = Navbar;
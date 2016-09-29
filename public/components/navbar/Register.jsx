import React, {Component} from 'react';
import firebase from 'firebase';

var Register = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      error: false
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    var email = this.refs.email.value;
    var pw = this.refs.pw.value;

<<<<<<< HEAD
=======
    // Add signup event
>>>>>>> added donation page, finished skeleton for the login, register
    firebase.auth().createUserWithEmailAndPassword( email, pw )
    .then( this.context.router.replace('/') )
    .catch( this.setState({error: e.message}) );
  },
  render: function(){
    var errors = this.state.error ? <p> {this.state.error} </p> : '';
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1> Register </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label> Email </label>
            <input className="form-control" ref="email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input ref="pw" type="password" className="form-control" placeholder="Password" />
          </div>
          {errors}
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    )
  }
});

module.exports = Register;
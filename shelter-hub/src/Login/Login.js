// import mobiscroll from '@mobiscroll/react';
// import '@mobiscroll/react/dist/css/min.css';

import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Login.css';
import firebase, { auth, provider } from '../firebase.js';
import { Link } from "react-router-dom";

class Login extends Component {
  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }
  render() {
    return (
      <div className='login'>
        <div>
          <h1> Sign in to HopeHub </h1>
          <p> Please enter your credentials to proceed </p>
          <Button size="lg" onClick={this.login}>Log In</Button>
        </div>
        <div>
          <h5>Don't have an account? <Link to="/registration">Sign up</Link></h5>
        </div>
      </div>
    )
  }
 }

export default Login;

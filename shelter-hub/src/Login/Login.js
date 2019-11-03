// import mobiscroll from '@mobiscroll/react';
// import '@mobiscroll/react/dist/css/min.css';

import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input,Container, Row, Col  } from 'reactstrap';
import './Login.css';
import firebase, { auth, provider } from '../firebase.js';




class Login extends React.Component {

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
       <Container>
         <Row>
           <Col>
             <h1> Sign in to Velocity </h1>
             <p> Please enter your credentails to proceed </p>
             <Button onClick={this.login}>Log In</Button>
             <h3>Don't have an account? <a href =""> Sign up</a></h3>

           </Col>
           <Col>
              <img src="/resources/main.jpg"></img>
           </Col>
         </Row>
       </Container>
     )

   }
 }

export default Login;

import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';
import firebase { auth } from '../firebase.js';


class Login extends Component{
  constructor() {
    super();
    this.state = {
      email: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      user: this.state.email
    }
    itemsRef.push(item);
    this.setState({
      email: ''
    });
  }
  render(){
    return (
        <Form onSubmit ={this.handleSubmit}>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>

                <Input type="email" name="email" id="exampleEmail" placeholder="Username" onChange={this.handleChange} value={this.state.email} />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            <Button>Submit</Button>
            <br></br>
            <a href="">Sign up</a>
        </Form>
    );
  }
}

export default Login;

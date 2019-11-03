import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
  Link
} from "react-router-dom";
import firebase from '../firebase.js';


class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      organization: '',
      beds: '',
      items: []
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
      organization: this.state.organization,
      beds: this.state.beds
    }
    itemsRef.push(item);
    this.setState({
      organization: '',
      beds: ''
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          organization: items[item].organization,
          beds: items[item].beds
        });
      }
      this.setState({
        items: newState
      });
    });
  }
 render() {
    return (
      <Form onSubmit={this.handleSubmit}>
          <input type="TEXT" name="organization" id="orgName" placeholder="Your organization's name" onChange={this.handleChange} value={this.state.organization} />
          <Label for="orgEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Your organization's email" />
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="" />
          <Label for="Street">Street</Label>
          <Input type="text" name="street" id="street" placeholder="" />
          <Label for="City">City</Label>
          <Input type="text" name="city" id="city" placeholder="" />
          <Label for="State">State</Label>
          <Input type="text" name="state" id="state" placeholder="" />
          <Label for="ZIP">ZIP</Label>
          <Input type="text" name="zip" id="zip" placeholder="" />
          <Label for="Country">Country</Label>
          <Input type="text" name="country" id="country" placeholder="" />
          <Label for="operatingHours">Hours of Operation</Label>
          <br/>From: <Input type="time" name="startTime" id="startTime" />
          To: <Input type="time" name="startTime" id="startTime" />
          <Label for="operatingDays">Which days are you open?</Label>
          <Input type="select" name="selectDays" id="selectDays" multiple>
            <option>Mon</option>
            <option>Tues</option>
            <option>Wed</option>
            <option>Thurs</option>
            <option>Fri</option>
            <option>Sat</option>
            <option>Sun</option>
          </Input>

         <Label for="numberOfBeds">How many beds do you have available?</Label>
         <input type="number" name="beds" id="numberBeds" onChange={this.handleChange} value={this.state.beds}/>
        <Link to="/">Go Back </Link>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Register;

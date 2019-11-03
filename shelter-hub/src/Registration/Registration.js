import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
  Link
} from "react-router-dom";

const Example = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="orgEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Your organization's email" />
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="" />
      </FormGroup>
      <FormGroup>
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
      </FormGroup>
      <FormGroup>
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
      </FormGroup>
      <FormGroup>
       <Label for="numberOfBeds">How many beds do you have available?</Label>
       <Input type="number" name="numberBeds" id="numberBeds" />
      </FormGroup>
      <Link to="/">Go Back </Link>
      <Button>Submit</Button>
    </Form>
  );
}

export default Example;

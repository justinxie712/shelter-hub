import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const BedNumber = (props) => {
  return (
      <FormGroup>
       <Label for="numberOfBeds">How many beds do you have available?</Label>
       <Input type="number" name="numberBeds" id="numberBeds" />
      </FormGroup>
  );
}

export default BedNumber;
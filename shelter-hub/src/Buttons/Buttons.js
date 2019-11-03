import React from 'react';
import { Button } from 'reactstrap';

const Buttons = (props) => {
  return (
    <div>
      <Button color="primary">Find Beds</Button>{' '}
      <br/><br/><Button color="primary">Update Availability</Button>{' '}
    </div>
  );
}

export default Buttons;
import React from 'react';
import { Button } from 'reactstrap';
import './Buttons.css';

const Buttons = (props) => {
  return (
    <div className="buttons">
      <div>
        <Button color="primary">Find Beds</Button>
      </div>
      <div>
        <Button color="primary">Update Availability</Button>
      </div>
    </div>
  );
}

export default Buttons;
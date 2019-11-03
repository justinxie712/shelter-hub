import React, { Component } from 'react';
import './BedCounter.css';
import { Slider } from '@material-ui/core';
import { Button } from 'reactstrap';

export class BedCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // pull number from database
            value: 0,
            // pull max from database (function =)
            max: 100
        };
    }

    handleChange = (e, value) => {
        this.setState({
            value: value
        });
    }

    handleChangeCommitted = (e, value) => {
        // Send updated number to the database
    }

    // handleClick = () => {
    //     // Save it to data
    // }

    render() {
        return (
            <React.Fragment>
                <h1>How many beds are available at your shelter?</h1>
                <div className='slider'>
                    <Slider 
                        onChange={(e, v) => this.handleChange(e, v)}
                        onChangeCommitted={(e, v) => this.handleChangeCommitted(e, v)}
                        value={this.state.value} 
                        valueLabelDisplay={'on'} 
                        track={'inverted'} 
                        marks={true} 
                        max={this.state.max} 
                        defaultValue={0} 
                        aria-labelledby="continuous-slider" 
                    />
                </div>
                {/* <Button color="primary" onClick={this.handleClick}>Log In</Button> */}
            </React.Fragment>
        );
    }
}

export default BedCounter;
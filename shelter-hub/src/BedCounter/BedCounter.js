import React, { Component } from 'react';
import './BedCounter.css';
import { Slider } from '@material-ui/core';
import { Button } from 'reactstrap';

export class BedCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            max: 100
        };
    }

    handleChange = (e, value) => {
        e.preventDefault();
        this.props.setBedCount(value);
        this.setState({
            value: value
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>How many beds are available at your shelter?</h1>
                <div className='slider'>
                    <Slider 
                        onChange={(e, v) => this.handleChange(e, v)}
                        value={this.state.value} 
                        valueLabelDisplay={'on'} 
                        track={'inverted'} 
                        defaultValue={0}
                        marks={true} 
                        max={this.state.max}
                        aria-labelledby="continuous-slider" 
                    />
                </div>
                {/* <Button color="primary" onClick={this.handleClick}>Log In</Button> */}
            </React.Fragment>
        );
    }
}

export default BedCounter;
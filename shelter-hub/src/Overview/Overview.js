import React, { Component } from 'react';
//import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Overview.css';

export class Overview extends Component {
    render() {
        return (
            <React.Fragment>
                <Map
                    google={this.props.google}
                    zoom={17}
                    style={{
                        width: '90%',
                        height: '100%',
                        position: 'relative',
                        float: 'right'
                    }}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
                >
                    <Marker position={{ lat: 47.444, lng: -122.176}} />
                </Map>
            </React.Fragment>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAJ1b4yjbbpzjussMZ1BaP4949_bfNoQiQ'
})(Overview);

import React, { Component } from 'react';
//import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Overview.css';
import { Button, Form, FormGroup, Label, Input,Container, Row, Col  } from 'reactstrap';
import firebase from '../firebase.js';

export class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    }
  }
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

    render() {
        return (
        <div>
          <h1> Find Beds Near You </h1>
          <Container id ="mapArea">
            <Row>
               <Col id = "mapView" sm="12" md={{ size: 6, offset: 3 }}>
                <React.Fragment>
                   <Map
                       google={this.props.google}
                       zoom={13}
                       initialCenter={{ lat:37.77493, lng:-122.41942}}
                   >
                       {this.displayMarkers()}
                   </Map>
               </React.Fragment>

             </Col>
          </Row>
        </Container>
      </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAJ1b4yjbbpzjussMZ1BaP4949_bfNoQiQ'
})(Overview);

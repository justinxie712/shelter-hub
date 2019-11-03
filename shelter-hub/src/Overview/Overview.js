import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Overview.css';
import { Container, Row, Col  } from 'reactstrap';

export class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{latitude: 47.49855629475769, longitude: -122.14184416996333},
        {latitude: 47.359423, longitude: -122.021071},
        {latitude: 47.2052192687988, longitude: -121.988426208496},
        {latitude: 47.6307081, longitude: -122.1434325},
        {latitude: 47.3084488, longitude: -122.2140121},
        {latitude: 47.5524695, longitude: -122.0425407}
      ],
      activeMarker: {},
      selectedPlaces: {},
      showInfoWindow: true,
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true
    });
  }

  displayMarkers = (marker, index) => {
    return (
        <Marker
          key={index} 
          id={index} 
          position={{
          lat: marker.latitude,
          lng: marker.longitude
        }}
        onClick={this.onMarkerClick} />
    )
  }

  render() {
    // mocking purposes
    let count = (this.state.activeMarker.position && (this.state.activeMarker.position.lat() === 47.49855629475769)) ? this.props.yourBedCount : Math.floor(Math.random() * 30);
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
                      initialCenter={{ lat:47.49855629475769, lng:-122.14184416996333}}
                  >
                    {this.state.stores.map((marker, index) => {
                      return this.displayMarkers(marker, index);
                    })}
                    <InfoWindow
                      marker={this.state.activeMarker}
                      visible={this.state.showInfoWindow}>
                        <div>
                          <h2>{`${count} beds`}</h2>
                        </div>
                    </InfoWindow>
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


import React, { Component } from 'react';
//import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import { Button, Form, FormGroup, Label, Input,Container, Row, Col  } from 'reactstrap';
import firebase from '../firebase.js';
class ParlorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.autocomplete = null
  }

  componentDidMount() {
    this.autocomplete = new window.google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})

    this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          name: items[item].name,
          beds: items[item].beds,
          street_address:items[item].street_address,
          city: items[item].city,
          state: items[item].state,
          zip_code:items[item].zip_code
        });
      }
      this.setState({
        items: newState
      });
    });

  }

  initialState() {
    return {
      name: '',
      beds: '',
      street_address: '',
      city: '',
      state: '',
      zip_code: '',
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
  event.preventDefault()
  const itemsRef = firebase.database().ref('items');
  const item = {
   name: this.state.name,
   beds: this.state.beds,
   street_address: this.state.street_address,
   city: this.state.city,
   state: this.state.state,
   zip_code: this.state.zip_code

 }
 itemsRef.push(item);
 this.setState({
   name: '',
   beds: '',
   street_address: '',
   city: '',
   state: '',
   zip_code: '',
 });
}

  handlePlaceSelect() {
    let addressObject = this.autocomplete.getPlace()
    let address = addressObject.address_components
    debugger
    this.setState({
      street_address: `${address[0].long_name} ${address[1].long_name}`,
      city: address[2].long_name,
      state: address[4].short_name,
      zip_code: address[6].short_name,
    })
  }

  render() {
    return(
      <div>
        <h1>Register your Organization</h1>
        <form onSubmit={this.handleSubmit}>
        <input
          name={"name"}
          value={this.state.name}
          placeholder={"Name"}
          onChange={this.handleChange}
        />
          <input id="autocomplete"
            className="input-field"
            ref="input"
            type="text"
            name={"street_address"}
            value={this.state.street_address}
              placeholder={"Street Address"}
              onChange={this.handleChange}
            />
            <input
              name={"city"}
              value={this.state.city}
              placeholder={"City"}
              onChange={this.handleChange}
            />
            <input
              name={"state"}
              value={this.state.state}
              placeholder={"State"}
              onChange={this.handleChange}
            />
            <input
              name={"zip_code"}
              value={this.state.zip_code}
              placeholder={"Zipcode"}
              onChange={this.handleChange}
            />
            <input
              name={"beds"}
              value={this.state.beds}
              placeholder={"Available beds"}
              onChange={this.handleChange}
            />
            <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }

}

export default ParlorForm

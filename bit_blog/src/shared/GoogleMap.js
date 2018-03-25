import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import {getOneAuthorData} from "../services/getOneAuthorData";

class GoogleMap extends Component {


  static defaultProps = {
    center: { lat: 12, lng: -34 },
    zoom: 3
  };

  render() {
   
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      />
    );
  }
}

export default GoogleMap ;

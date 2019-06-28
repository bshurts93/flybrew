import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
const key = "AIzaSyAsSBuPuH3bEpsyzhlQU8epJbcDrPN1sKU";

const AnyReactComponent = ({ text }) => {
  return (
    <div>
      <h3>{text}</h3>
    </div>
  );
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.14501,
      lng: 11.554044
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "30rem", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

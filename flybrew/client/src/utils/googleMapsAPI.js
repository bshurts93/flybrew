import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Chip from "@material-ui/core/Chip";

const key = "AIzaSyAsSBuPuH3bEpsyzhlQU8epJbcDrPN1sKU";

class SimpleMap extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={this.props.coordinates}
          defaultZoom={15}
        >
          <Chip
            lat={this.props.coordinates.lat}
            lng={this.props.coordinates.lng}
            color="primary"
            label={this.props.label}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    Polyline
  } from "react-google-maps";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Googlemap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 15
    };
    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMap defaultZoom={7} defaultCenter={{ lat: -34.897, lng: 151.144 }}>
                    <Polyline path={[{ lat: -34.397, lng: 150.644 }, { lat: -35.397, lng: 151.644 }]} />
                </GoogleMap>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAWxH3lSodPscePDwGyBTFnRcBQUkLZaDU" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Car"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

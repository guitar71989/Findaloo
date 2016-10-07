import React from 'react';
import MarkerManager from './../util/marker_manager.js';

class LooMap extends React.Component {

  componentDidMount() {
    let func = this;
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 40.7250279, lng: -73.998986},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);


    google.maps.event.addListener(this.map, 'idle', function() {
      const { north, south, east, west } = this.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
        func.props.updateBounds(bounds);
      });

    this.MarkerManager.updateMarkers(this.props.loos);
  }



  componentWillReceiveProps(newProps) {
    this.MarkerManager.updateMarkers(newProps.loos);
  }

  render(){
      return(
      <div id="map-container" ref="map">
      </div>
    );
  }
}

export default LooMap;

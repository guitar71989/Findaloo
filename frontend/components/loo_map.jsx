import React from 'react';
import MarkerManager from './../util/marker_manager.js';

class LooMap extends React.Component {

  componentDidMount() {
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 40.7250279, lng: -73.998986},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);

    this.MarkerManager.updateMarkers(this.props.loos);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.loos);
  }

  render(){
      return(
      <div id="map-container" ref="map">
      </div>
    );
  }
}

export default LooMap;

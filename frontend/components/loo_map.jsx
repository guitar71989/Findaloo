import React from 'react';
import MarkerManager from './../util/marker_manager.js';


class LooMap extends React.Component {


  componentDidMount() {
    const mapOptions = {
        center: {lat: 40.7250279, lng: -73.998986},
        zoom: 13,
        draggable: true,
        zoomControl: true,
        scrollwheel: true,
        disableDoubleClickZoom: false
      };

    let func = this;
    const mapDOMNode = this.refs.map;

    this.map = new google.maps.Map(mapDOMNode);

    this.map.setOptions(mapOptions);

    this.MarkerManager = new MarkerManager(this.map);

    if (this.props.singleLoo){
      this.props.requestLoo(this.props.looId);
    } else {
      this._registerListeners();
      // this.MarkerManager.updateMarkers(this.props.loos);
    }
  }

  componentDidUpdate() {
    if(this.props.singleLoo){
     this.MarkerManager.updateMarkers([this.props.loos[Object.keys(this.props.loos)[0]]]);
     this.map.setOptions({center: {lat: this.props.loos[this.props.looId].latitude, lng: this.props.loos[this.props.looId].longitude}});
   } else {
     this.MarkerManager.updateMarkers(this.props.loos);
    }
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateBounds(bounds);
    });
  }

  render(){
    if (this.props.singleLoo){
      return(
        <div id="map-container-show" ref="map">
        </div>
      );
    } else {
      return(
        <div id="map-container-index" ref="map">
        </div>
      );
    }
  }
}

export default LooMap;

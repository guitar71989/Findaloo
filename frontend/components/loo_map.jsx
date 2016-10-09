import React from 'react';
import MarkerManager from './../util/marker_manager.js';

class LooMap extends React.Component {

  componentDidMount() {
    let func = this;
    const mapDOMNode = this.refs.map;

    let mapOptions;

    if (this.props.singleLoo){
      debugger
      mapOptions = {
        center: {lat: this.props.loos.latitude, lng: this.props.loos.longitutude},
        zoom: 13,
        draggable: false,
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
      };
    } else {
      mapOptions = {
        center: {lat: 40.7250279, lng: -73.998986},
        zoom: 13,
        draggable: true,
        zoomControl: true,
        scrollwheel: true,
        disableDoubleClickZoom: false
      };
    }

    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);
    // if (this.props.singleLoo){
    //   this.props.requestLoo(this.props.looId);
    // } else {
      google.maps.event.addListener(this.map, 'idle', function() {
        const { north, south, east, west } = this.getBounds().toJSON();
        const bounds = {
          northEast: { lat:north, lng: east },
          southWest: { lat: south, lng: west }
        };
          func.props.updateBounds(bounds);
        }
      );
      let loos = (this.props.singleLoo) ? [this.props.loos] : this.props.loos;
      this.MarkerManager.updateMarkers(loos);
    // }
  }

  componentWillReceiveProps(newProps) {
    if(this.props.singleLoo){
     this.MarkerManager.updateMarkers(newProps.loos);
    } else {
     this.MarkerManager.updateMarkers(newProps.loos);
    }
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

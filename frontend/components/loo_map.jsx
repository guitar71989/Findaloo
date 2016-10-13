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
        disableDoubleClickZoom: false,
        zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_CENTER },
        mapTypeControlOptions: { position: google.maps.ControlPosition.TOP_RIGHT }
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

  componentWillReceiveProps(nextProps) {
    if(nextProps.singleLoo){
     this.MarkerManager.updateMarkers([nextProps.loos[Object.keys(nextProps.loos)[0]]]);
     this.map.setOptions({center: {lat: nextProps.loos[nextProps.looId].latitude, lng: nextProps.loos[nextProps.looId].longitude}});
   } else if (this._coordsExist(nextProps) && this._coordsDifferent(this.props, nextProps)) {
     this.map.setOptions({center: nextProps.filters.coords, zoom: 17});
   }

   if (!this.props.singleLoo){
     this.MarkerManager.updateMarkers(nextProps.loos);
   }

  }

  _coordsExist(props) {
    return !!props.filters.coords.lat && !!props.filters.coords.lng;
  }

  _coordsDifferent(oldProps, nextProps){
    return oldProps.filters.coords.lat !== nextProps.filters.coords.lat ||
    oldProps.filters.coords.lng !== nextProps.filters.coords.lng;
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

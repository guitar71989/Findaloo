import React from 'react';

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this._createMarkerFromLoo = this._createMarkerFromLoo.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(loos){
    this.loos = loos;
    this._loosToAdd().forEach(this._createMarkerFromLoo);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _loosToAdd(){
    const currentLoos = this.markers.map( marker => marker.looId );
    return this.loos.filter( loo => !currentLoos.includes(loo.id));
  }

  _markersToRemove(){
    const looIds = this.loos.map( loo => loo.id );
    return this.markers.filter( marker => !looIds.includes(marker.looId));
  }


  _createMarkerFromLoo(loo){
    const newMarkerPos = {lat: loo.latitude, lng: loo.longitude};
    const newMarkerTitle = loo.name;
    const icon = {
      url: "https://s3.amazonaws.com/findaloo-dev/toilet_illustration.png",
      scaledSize: new google.maps.Size(25, 25), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };

    var newMarker = new google.maps.Marker({
      position: newMarkerPos,
      map: this.map,
      title: newMarkerTitle,
      icon: icon
    });

    var reviews = (loo) => (
      (loo.review_count === 1) ? "review" : "reviews"
    );

    var infoWindow = new google.maps.InfoWindow({
      content: ('<div><a style="color:#82abed" href="#/loos/' + loo.id + ' "><b>' + loo.name + '</b></a></div>' +
                '<div style="color:#808080">' + loo.address + '</div>' +
                '<p style="color:gold">' + '★'.repeat(Math.round(loo.review_avg)) + '</br>' +
                '<p style="color:#808080">' + loo.review_count + '</p>'
               )
    });

    google.maps.event.addListener(newMarker,'click', function(){
      infoWindow.open(this.map, newMarker);
    });

    newMarker.looId = loo.id;

    this.markers.push(newMarker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}

export default MarkerManager;

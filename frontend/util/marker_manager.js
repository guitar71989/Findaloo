class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(loos){
    console.log(loos);
    this.loos = loos;
    this._loosToAdd().forEach(this._createMarkerFromLoo.bind(this));
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

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }

  _createMarkerFromLoo(loo){
    let newMarkerPos = {lat: loo.latitude, lng: loo.longitude};
    let newMarkerTitle = loo.name;

    var icon = {
      url: "https://s3.amazonaws.com/findaloo-dev/toilet_illustration.png",
      scaledSize: new google.maps.Size(25, 25), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    const newMarker = new google.maps.Marker({
      position: newMarkerPos,
      map: this.map,
      title: newMarkerTitle,
      icon: icon
    });

    newMarker.looId = loo.id;
    this.markers.push(newMarker);
  }

}

export default MarkerManager;

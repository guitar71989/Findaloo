class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(loos){
    this.loostoAdd(loos).forEach( (loo) => this.createMarkerFromLoo(loo) );
  }

  loostoAdd(loos){
    const currentLoos = this.markers.map( marker => marker.looId );
    const something = loos.filter( loo => !currentLoos.includes(loo.id));
    return something;
  }

  createMarkerFromLoo(loo){
    let newMarkerPos = {lat: loo.latitude, lng: loo.longitude};
    let newMarkerTitle = loo.name;

    var icon = {
      url: "https://s3.amazonaws.com/findaloo-dev/toilet_illustration.png",
      scaledSize: new google.maps.Size(30, 30), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };

    const newMarker = new google.maps.Marker({
      position: newMarkerPos,
      map: this.map,
      title: newMarkerTitle,
      looId: loo.id,
      icon: icon
    });

    this.markers.push(newMarker);
  }

}

export default MarkerManager;

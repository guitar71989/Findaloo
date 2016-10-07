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
    let icon = "http://s3.amazonaws.com/findaloo-dev/loos/images/000/000/004/original/toilet_illustration.png?1475809180";

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

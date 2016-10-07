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
      url: "https://s3.amazonaws.com/findaloo-dev/toilet_illustration.png?X-Amz-Date=20161007T132929Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=22f3533eed1a9195b2c5f0512cd8d9481d281b1079bea90ba8228ef9964bf593&X-Amz-Credential=ASIAJXROJDQOJJIGQDOA/20161007/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEOP//////////wEaDJ0UO5Em3ZSB2MM/wCL6AcL7rHCUvmKy7Hu1NUSgJeSXtjtjhPbsoqNvTJes/dMaIKhdw0BIS/%2Bje6%2BIHJ1UaHt7q%2BYTd7wA2ZF9wACikka3M4anaXy9CxulJQFgTTxEhxm62nnzpE03niOkug9ZpomYI9XfR6Gz3Rj9A9%2BrcITGmmxF2XPGC7F9TwW8CmtXo3RC7Pua1IpEUQ0OAm8fjEOkjHg%2Bm1zgsGjGjGVMKpokGCFVzf6JV3RTw/Eah2MRfqL7DgMBgxzA0tMjhQjbpTKulw2bP9g945Z51jCEvvXvacruZU67dpJ4qaxzaTpTPWlxC5AzLkYdxKSm6bPyMxbt7YhTpwTcDmgo4IDcvwU%3D",
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

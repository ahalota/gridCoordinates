//Very simple conversion of lat-lng to 1/4 degree equirectangular gridded coordinates.
//TODO: Error handling. Paremeter to set grid interval.

latLngToGrid = function(pIn){
	var p = {lat: pIn.lat, lng: pIn.lng};
	
	//Special case to handle lng outside of (-180,180) range. 
	while (p.lng < -180){ p.lng = 360+p.lng;}				
	while (p.lng > 180) { p.lng = p.lng-360; }
	var x = (179.875+p.lng)*4;
	
	//TODO: Add Special case for lat outside of (-90,90) range.
	var y = (p.lat-89.875)*-4;
	return {y:y,x:x};
}

gridToLatLng = function(p){
	var lng =  (p.x/4)  - 179.875;
	var lat = -(p.y/4)  + 89.875;
	return {lat:lat,lng:lng};
}

window.addEventListener('load', getCurrentLocation)

function storeCurrentLocation(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    alert("latitude: " + latitude + "\nlongitude: " + longitude)
}

function locationErrorHandler(){
    alert("Error: Position is unavailble. Please give access")
}

function getCurrentLocation(){
    navigator.geolocation.getCurrentPosition(storeCurrentLocation, locationErrorHandler)
    
}
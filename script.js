window.addEventListener('load', getCurrentLocation)

function getCurrentLocation(){
    navigator.geolocation.getCurrentPosition(getCurrentGeogPosition, locationErrorHandler)
}

function getCurrentGeogPosition(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    storeCoordsUrl(lat,long)
}

function locationErrorHandler(){
    alert("Error: Position is unavailble. Please give access")
}   

function storeCoordsUrl(lat, long){
    const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`
}
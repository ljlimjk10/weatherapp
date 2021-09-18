window.addEventListener('load', getCurrentPosWeather)

function getCurrentPosWeather(){
    navigator.geolocation.getCurrentPosition(currentGeogPositionInfo, positionErrorHandler)
}

function currentGeogPositionInfo(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    fetchWeatherInfo(lat,long)
}

function positionErrorHandler(){
    alert("Error: Position is unavailble. Please give access")
}   

function fetchWeatherInfo(lat, long){
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    fetch(api)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        insertWeatherInfo(data)
    })
}

function insertWeatherInfo(data){
    const tempDegree = document.getElementsByClassName("temperature-degree")[0]
    const tempDegreeInnerHtml = tempDegree.innerHTML = data.main.temp + "°F"
    const location = document.getElementsByClassName("location-timezone")[0]
    const locationInnerHtml = location.innerHTML = data.name
    const weatherIcon = document.getElementsByClassName("weather-icon")[0]
    const weatherIconInnerHtml = weatherIcon.innerHTML = `<img src="icons/${data.weather[0].icon}.png">`
    const tempDescription = document.getElementsByClassName("temperature-description")[0]
    const tempDescriptionInnerHtml = tempDescription.innerHTML = data.weather[0].description
}



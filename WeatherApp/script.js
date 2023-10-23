document.getElementById("xhr-btn").addEventListener("click", getWeatherUsingXHR);
document.getElementById("fetch-btn").addEventListener("click", getWeatherUsingFetch);
document.getElementById("fetch-async-btn").addEventListener("click", getWeatherUsingFetchAsyncAwait);

function getWeatherUsingXHR() {
    var lat = document.getElementById("latitude").value;
    var lon = document.getElementById("longitude").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var data = JSON.parse(xhttp.responseText);
            displayWeather(data.hourly.temperature_2m[0]);
        }
    };

    xhttp.open("GET", "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&hourly=temperature_2m");
    xhttp.send();
}

function getWeatherUsingFetch() {
    var lat = document.getElementById("latitude").value;
    var lon = document.getElementById("longitude").value;
    
    let url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&hourly=temperature_2m";
    fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (responseText) {
            let data = JSON.parse(responseText);
            displayWeather(data.hourly.temperature_2m[0]);
        })
        .catch(function (e) {
            console.log("Error: " + e);
        });
}

async function getWeatherUsingFetchAsyncAwait() {
    var lat = document.getElementById("latitude").value;
    var lon = document.getElementById("longitude").value;
    
    let url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&hourly=temperature_2m";
    let response = await fetch(url);
    let data = await response.json();
    displayWeather(data.hourly.temperature_2m[0]);
}

function displayWeather(temp) {
    const iconElem = document.getElementById("weather-icon");
    const descriptionElem = document.getElementById("weather-description");
    const temperatureElem = document.getElementById("weather-temperature");

    if (temp >= 30) {
        var icon = "☀️";
        var description = "Sunny";
    } else if (temp >= 20) {
        var icon = "🌥";
        var description = "Cloudy";
    } else {
        var icon = "❄";
        var description = "Cold";
    }
    const temperature = temp + "°C";

    iconElem.textContent = icon;
    descriptionElem.textContent = description;
    temperatureElem.textContent = temperature;
}

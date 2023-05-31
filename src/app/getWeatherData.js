'use client';

import React, { useEffect } from 'react' 
import styles from './page.module.css'


// create a object with symbol code keys
const weatherTypes = {
    'clearsky_day': 'Weather Icons/weathericon/png/clearsky_day.png',
    'clearsky_night': 'Weather Icons/weathericon/png/clearsky_night.png',
    'cloudy': 'Weather Icons/weathericon/png/cloudy.png',
    'fair_day': 'Weather Icons/weathericon/png/fair_day.png',
    'fair_night': 'Weather Icons/weathericon/png/fair_night.png',
    'fog': 'Weather Icons/weathericon/png/fog.png',
    'heavyrain': 'Weather Icons/weathericon/png/heavyrain.png',
    'heavyrainandthunder': 'Weather Icons/weathericon/png/heavyrainandthunder.png',
    'heavyrainshowers_day': 'Weather Icons/weathericon/png/heavyrainshowers_day.png',
    'heavyrainshowers_night': 'Weather Icons/weathericon/png/heavyrainshowers_night.png',
    'heavyrainshowersandthunder_day': 'Weather Icons/weathericon/png/heavyrainshowersandthunder_day.png',
    'heavyrainshowersandthunder_night': 'Weather Icons/weathericon/png/heavyrainshowersandthunder_night.png',
    'heavysleet': 'Weather Icons/weathericon/png/heavysleet.png',
    'heavysleetandthunder': 'Weather Icons/weathericon/png/heavysleetandthunder.png',
    'heavysleetshowers_day': 'Weather Icons/weathericon/png/heavysleetshowers_day.png',
    'heavysleetshowers_night': 'Weather Icons/weathericon/png/heavysleetshowers_night.png',
    'heavysleetshowersandthunder_day': 'Weather Icons/weathericon/png/heavysleetshowersandthunder_day.png',
    'heavysleetshowersandthunder_night': 'Weather Icons/weathericon/png/heavysleetshowersandthunder_night.png',
    'heavysnow': 'Weather Icons/weathericon/png/heavysnow.png',
    'heavysnowandthunder': 'Weather Icons/weathericon/png/heavysnowandthunder.png',
    'heavysnowshowers': 'Weather Icons/weathericon/png/heavysnowshowers.png',
    'heavysnowshowersandthunder_day': 'Weather Icons/weathericon/png/heavysnowshowersandthunder_day.png',
    'heavysnowshowersandthunder_night': 'Weather Icons/weathericon/png/heavysnowshowersandthunder_night.png',
    'lightrain': 'Weather Icons/weathericon/png/lightrain.png',
    'lightrainandthunder': 'Weather Icons/weathericon/png/lightrainandthunder.png',
    'lightrainshowers_day': 'Weather Icons/weathericon/png/lightrainshowers_day.png',
    'lightrainshowers_night': 'Weather Icons/weathericon/png/lightrainshowers_night.png',
    'lightrainshowersandthunder_day': 'Weather Icons/weathericon/png/lightrainshowersandthunder_day.png',
    'lightrainshowersandthunder_night': 'Weather Icons/weathericon/png/lightrainshowersandthunder_night.png',
    'lightsleet': 'Weather Icons/weathericon/png/lightsleet.png',
    'lightsleetandthunder': 'Weather Icons/weathericon/png/lightsleetandthunder.png',
    'lightsleetshowers_day': 'Weather Icons/weathericon/png/lightsleetshowers_day.png',
    'lightsleetshowers_night': 'Weather Icons/weathericon/png/lightsleetshowers_night.png',
    'lightsnow': 'Weather Icons/weathericon/png/lightsnow.png',
    'lightsnowandthunder': 'Weather Icons/weathericon/png/lightsnowandthunder.png',
    'lightsnowshowers_day': 'Weather Icons/weathericon/png/lightsnowshowers_day.png',
    'lightsnowshowers_night': 'Weather Icons/weathericon/png/lightsnowshowers_night.png',
    'lightssleetshowersandthunder_day': 'Weather Icons/weathericon/png/lightssleetshowersandthunder_day.png',
    'lightssleetshowersandthunder_night': 'Weather Icons/weathericon/png/lightssleetshowersandthunder_night.png',
    'lightssnowshowersandthunder_day': 'Weather Icons/weathericon/png/lightssnowshowersandthunder_day.png',
    'lightssnowshowersandthunder_night': 'Weather Icons/weathericon/png/lightssnowshowersandthunder_night.png',
    'partlycloudy_day': 'Weather Icons/weathericon/png/partlycloudy_day.png',
    'partlycloudy_night': 'Weather Icons/weathericon/png/partlycloudy_night.png',
    'rain': 'Weather Icons/weathericon/png/rain.png',
    'rainandthunder': 'Weather Icons/weathericon/png/rainandthunder.png',
    'rainshowers_day': 'Weather Icons/weathericon/png/rainshowers_day.png',
    'rainshowers_night': 'Weather Icons/weathericon/png/rainshowers_night.png',
    'rainshowersandthunder_day': 'Weather Icons/weathericon/png/rainshowersandthunder_day.png',
    'rainshowersandthunder_night': 'Weather Icons/weathericon/png/night.png',
    'sleet': 'Weather Icons/weathericon/png/sleet.png',
    'sleetandthunder': 'Weather Icons/weathericon/png/sleetandthunder.png'
}

// create an asynchronous function to get data for component
const getWeatherData = async () => {
    try {

        // get the position of the user
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        // put the users position in lat and lon coordinates
        const lat = position.coords.latitude;
        const lon = position.coords.longitude

        const API_URL = `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${lon}`

        // fetch data from the API URL
        const response = await fetch(API_URL);

        // except the response does not exist
        if (!response.ok) {
            throw new Error('FEIL: API-kallet returnerte statuskode ' + response.status);
        }

        const data = await response.json();
        console.log(data);

        const temperature = data.properties.timeseries[0].data.instant.details.air_temperature;
        const weatherSymbolCode = data.properties.timeseries[0].data.next_1_hours.summary.symbol_code;
        const weatherIconURL = weatherTypes[weatherSymbolCode];

        console.log(`Your temperature is ${temperature} degrees`)
        console.log(`Your weather is ${weatherSymbolCode}`)

        document.getElementById('weather-today-icon').innerHTML = `<img src="${weatherIconURL}" width="200rem" height="200rem">`;
        document.getElementById('weather-text').innerHTML = `<p>Your weather is ${weatherSymbolCode}</p>`;
        document.getElementById('weather-temp').innerHTML = `<p>${temperature} C°</p>`;
    } catch (error) {
        console.log(error);
    }
};

export default function WeatherComponent () {
    useEffect(() => {
        getWeatherData();
    }, []);

    

    return (
        <div className={styles.second}>
            <div className='infoBox'>
                <div id="weather-today-icon"></div>
                <div id="weather-text"></div>
                <div id="weather-temp"></div>
            </div>
        </div>
      );
}
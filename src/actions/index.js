import axios from 'axios';

const API_KEY = '0cdc49d2a1f96b48c0af64f00a19ef70';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
}

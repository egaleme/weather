import config from '../../config';

const {APPID, PLACESAPIKEY} = config;

export async function fetchWeather(weather, lat, lon) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric `;

  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function fetchForecast(forecast, lat, lon) {
  let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric `;

  const res = await fetch(url);
  const data = await res.json();
  return data;
}

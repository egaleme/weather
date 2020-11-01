import React from 'react';
import {useQuery} from 'react-query';

import {fetchWeather} from '../api';
import {WeatherContext} from '../context';

export function useWeather() {
  const {state} = React.useContext(WeatherContext);
  return useQuery(['weather', state.lat, state.lng], fetchWeather);
}

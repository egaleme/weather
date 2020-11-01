import React from 'react';
import {useQuery} from 'react-query';

import {fetchForecast} from '../api';
import {WeatherContext} from '../context';

export function useForecast() {
  const {state} = React.useContext(WeatherContext);
  return useQuery(['forecast', state.lat, state.lng], fetchForecast);
}

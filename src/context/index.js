import React from 'react';
import GetLocation from 'react-native-get-location';

export const WeatherContext = React.createContext();

export const WeatherProvider = ({children}) => {
  const [state, stateSet] = React.useState({lat: 0, lng: 0});

  React.useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    }).then((location) => {
      stateSet({...state, lat: location.latitude, lng: location.longitude});
    });
  }, []);

  return (
    <WeatherContext.Provider value={{state, stateSet}}>
      {children}
    </WeatherContext.Provider>
  );
};

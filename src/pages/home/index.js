import React from 'react';
import {View} from 'react-native';

import Weather from './Weather';
import Forecast from './Forecast';

const Home = React.memo((props) => {
  return (
    <View style={{flex: 1}}>
      <Weather navigation={props.navigation} />
      <Forecast navigation={props.navigation} />
    </View>
  );
});

export default Home;

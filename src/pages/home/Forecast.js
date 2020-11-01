import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';

import moment from 'moment';

import {useForecast} from '../../hooks';

import clear from '../../../assets/Icons/clear.png';
import partlysunny from '../../../assets/Icons/partlysunny.png';
import rain from '../../../assets/Icons/rain.png';

export default function Forecast(props) {
  const {data, isLoading, error} = useForecast();

  function bkColor(type) {
    switch (type) {
      case 'clouds':
        return '#54717A';
      case 'clear':
        return '#47AB2F';
      case 'rain':
        return '#57575D';
      default:
        return '#54717A';
    }
  }

  function icons(type) {
    switch (type) {
      case 'clouds':
        return partlysunny;
      case 'clear':
        return clear;
      case 'rain':
        return rain;
      default:
        return partlysunny;
    }
  }

  function marginleftIcon(type) {
    if (type === 'Wednesday' || type === 'Friday') {
      return {marginRight: 20};
    } else {
      return {};
    }
  }

  if (isLoading) {
    return (
      <View
        style={[styles.root, {justifyContent: 'center', alignItems: 'center'}]}>
        <ActivityIndicator animating size="large" color="#E39542" />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={[styles.root, {justifyContent: 'center', alignItems: 'center'}]}>
        <Text>Oops.An error occurred !</Text>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.root,
        {backgroundColor: bkColor(data.list[0].weather[0].main)},
      ]}>
      <View style={{paddingTop: 20}}>
        <View style={styles.tempView}>
          <Text style={styles.tempText}>
            {moment(data.list[4].dt_txt).add(0, 'days').format('dddd')}
          </Text>
          <Image
            source={icons(data.list[4].weather[0].main)}
            width={'60%'}
            height={'60%'}
            style={marginleftIcon(
              moment(data.list[4].dt_txt).add(0, 'days').format('dddd'),
            )}
          />
          <Text style={styles.tempText}>
            {Math.round(data.list[4].main.temp) + '°'}
          </Text>
        </View>

        <View style={styles.tempView}>
          <Text style={styles.tempText}>
            {moment(data.list[12].dt_txt).add(0, 'days').format('dddd')}
          </Text>
          <Image
            source={icons(data.list[12].weather[0].main)}
            width={'60%'}
            height={'60%'}
            style={marginleftIcon(
              moment(data.list[12].dt_txt).add(0, 'days').format('dddd'),
            )}
          />
          <Text style={styles.tempText}>
            {Math.round(data.list[12].main.temp) + '°'}
          </Text>
        </View>

        <View style={styles.tempView}>
          <Text style={styles.tempText}>
            {moment(data.list[20].dt_txt).add(0, 'days').format('dddd')}
          </Text>
          <Image
            source={icons(data.list[20].weather[0].main)}
            width={'60%'}
            height={'60%'}
            style={marginleftIcon(
              moment(data.list[20].dt_txt).add(0, 'days').format('dddd'),
            )}
          />
          <Text style={styles.tempText}>
            {Math.round(data.list[20].main.temp) + '°'}
          </Text>
        </View>

        <View style={styles.tempView}>
          <Text style={styles.tempText}>
            {moment(data.list[28].dt_txt).add(0, 'days').format('dddd')}
          </Text>
          <Image
            source={icons(data.list[28].weather[0].main)}
            width={'60%'}
            height={'60%'}
            style={marginleftIcon(
              moment(data.list[28].dt_txt).add(0, 'days').format('dddd'),
            )}
          />
          <Text style={styles.tempText}>
            {Math.round(data.list[28].main.temp) + '°'}
          </Text>
        </View>

        <View style={styles.tempView}>
          <Text style={styles.tempText}>
            {moment(data.list[36].dt_txt).add(0, 'days').format('dddd')}
          </Text>
          <Image
            source={icons(data.list[36].weather[0].main)}
            width={'60%'}
            height={'60%'}
            style={marginleftIcon(
              moment(data.list[36].dt_txt).add(0, 'days').format('dddd'),
            )}
          />
          <Text style={styles.tempText}>
            {Math.round(data.list[36].main.temp) + '°'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  tempView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  tempText: {
    color: '#fff',
    fontSize: 16,
  },
});

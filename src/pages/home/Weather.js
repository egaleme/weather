import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';
import moment from 'moment';

import {useWeather, useStorage} from '../../hooks';

import Hamburger from '../../components/Hamburger';

import forest_cloudy from '../../../assets/Images/forest_cloudy.png';
import forest_rainy from '../../../assets/Images/forest_rainy.png';
import forest_sunny from '../../../assets/Images/forest_sunny.png';

const {width, height} = Dimensions.get('window');

export default function Weather(props) {
  const {data, isLoading, error} = useWeather();
  const {saveFavoriteLocation, getFavoritesLocation} = useStorage();

  function backgroundImage(type) {
    switch (type) {
      case 'clouds':
        return forest_cloudy;
      case 'clear':
        return forest_sunny;
      case 'rain':
        return forest_rainy;
      default:
        return forest_cloudy;
    }
  }

  function statusBarColor(type) {
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

  function textDescription(type) {
    switch (type) {
      case 'clouds':
        return 'CLOUDY';
      case 'clear':
        return 'SUNNY';
      case 'rain':
        return 'RAINY';
      default:
        return 'CLOUDY';
    }
  }

  function saveLocation() {
    saveFavoriteLocation({
      ...data,
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
    });
  }

  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigation.toggleDrawer();
  };

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
    <View style={styles.root}>
      <ImageBackground
        source={backgroundImage(data.weather[0].main)}
        resizeMode="cover"
        style={{
          ...StyleSheet.absoluteFillObject,
        }}>
        <Hamburger
          saveLocation={saveLocation}
          weather="weather"
          toggleDrawer={toggleDrawer}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textTemp}>
            {Math.round(data.main.temp) + '°'}
          </Text>
          <Text style={styles.tempType}>
            {textDescription(data.weather[0].main)}
          </Text>
        </View>
        <View
          style={[
            styles.currentMinMaxView,
            {backgroundColor: statusBarColor(data.weather[0].main)},
          ]}>
          <View style={styles.tempView}>
            <Text style={{color: '#fff'}}>
              {Math.round(data.main.temp_min) + '°'}
            </Text>
            <Text style={{color: '#fff'}}>min</Text>
          </View>
          <View style={styles.tempView}>
            <Text style={{color: '#fff'}}>
              {Math.round(data.main.temp) + '°'}
            </Text>
            <Text style={{color: '#fff'}}>current</Text>
          </View>
          <View style={styles.tempView}>
            <Text style={{color: '#fff'}}>
              {Math.round(data.main.temp_max) + '°'}
            </Text>
            <Text style={{color: '#fff'}}>max</Text>
          </View>
        </View>
        <StatusBar
          barStyle="light-content"
          backgroundColor={statusBarColor(data.weather[0].main)}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1.5,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: height / 7,
  },
  currentMinMaxView: {
    position: 'absolute',
    bottom: 0,
    height: 38,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    //paddingBottom: 5,
  },
  textTemp: {
    color: '#fff',
    fontSize: 45,
    fontWeight: '700',
  },
  tempType: {
    color: '#fff',
    fontSize: 30,
  },
  tempView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 7,
  },
});

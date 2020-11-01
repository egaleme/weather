import React from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';

import {useStorage} from '../../hooks';
import Hamburger from '../../components/Hamburger';

export default function List(props) {
  const {getFavoritesLocation} = useStorage();
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    const locations = await getFavoritesLocation();
    setState([...state, locations]);
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

  function bgColor(type) {
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

  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigation.toggleDrawer();
  };

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View
        style={{
          backgroundColor: bgColor(item.weather[0].main),
          height: 150,
          borderRadius: 6,
          marginVertical: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[styles.item]}>{Math.round(item.main.temp) + '°'}</Text>
        <Text style={styles.item}>{textDescription(item.weather[0].main)}</Text>
        <Text
          style={
            styles.item
          }>{`latitude: ${item.coord.lat}   longitude : ${item.coord.lon}`}</Text>
        <Text style={styles.item}>{item.date}</Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
    <View style={styles.root}>
      <Hamburger
        weather="list"
        title="Favorites Locations"
        toggleDrawer={toggleDrawer}
      />
      <View style={{flex: 1, marginHorizontal: 20, marginTop: 80}}>
        <FlatList
          data={state[0]}
          //ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 15,
    color: '#fff',
  },
});

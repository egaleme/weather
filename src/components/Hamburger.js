import React from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const {width} = Dimensions.get('window');

const Hambuger = (props) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          position: 'absolute',
          left: 20,
          marginTop: 25,
        }}
        onPress={props.toggleDrawer}>
        <View style={{width: 35, height: 35}}>
          <Feather
            name="menu"
            size={25}
            color={props.weather === 'weather' ? '#fff' : '#000'}
          />
        </View>
      </TouchableOpacity>
      <Text
        style={{
          position: 'absolute',
          left: width / 4,
          marginTop: 27,
          fontSize: 16,
        }}>
        {props.title}
      </Text>
      {props.weather === 'weather' ? (
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            position: 'absolute',
            right: 20,
            marginTop: 25,
          }}
          onPress={props.saveLocation}>
          <View style={{width: 35, height: 35}}>
            <Fontisto name="favorite" size={25} color="#fff" />
          </View>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default Hambuger;

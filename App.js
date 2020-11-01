import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';

import Home from './src/pages/home';
import List from './src/pages/favorites/List';
import {WeatherProvider} from './src/context';

import {setConsole} from 'react-query';

setConsole({
  log: console.log,
  warn: console.warn,
  error: console.warn,
});

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Favorites" component={List} />
    </Drawer.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 200);
  }, []);

  return (
    <WeatherProvider>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </WeatherProvider>
  );
}

import AsyncStorage from '@react-native-community/async-storage';

async function saveFavoriteLocation(cords) {
  let p = [];
  const v = await AsyncStorage.getItem('weather');
  let value = JSON.parse(v);
  if (value) {
    await AsyncStorage.setItem('weather', JSON.stringify([...value, cords]));
  } else {
    await AsyncStorage.setItem('weather', JSON.stringify([...p, cords]));
  }
}

async function getFavoritesLocation() {
  const value = await AsyncStorage.getItem('weather');
  return JSON.parse(value) || [];
}

export function useStorage() {
  return {
    saveFavoriteLocation: saveFavoriteLocation,
    getFavoritesLocation: getFavoritesLocation,
  };
}

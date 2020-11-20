import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet} from 'react-native';

const Car = ({style, onPressHandler}) => (
  <Icon
    name="car"
    style={{...styles.icon, ...style}}
    onPress={onPressHandler}
  />
);

export default Car;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 50,
  },
});

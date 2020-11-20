import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';

const LocationPicker = ({style}) => (
  <Icon name="edit-location" style={{...styles.icon, ...style}} />
);

export default LocationPicker;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';

const MyLocation = ({style}) => (
  <Icon name="my-location" style={{...styles.icon, ...style}} />
);

export default MyLocation;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

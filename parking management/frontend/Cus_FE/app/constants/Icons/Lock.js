import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet} from 'react-native';

const Lock = ({style}) => (
  <Icon name="lock" style={{...styles.icon, ...style}} />
);

export default Lock;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

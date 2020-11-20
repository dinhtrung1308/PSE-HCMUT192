import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';

const Help = ({style}) => (
  <Icon name="ios-help-circle" style={{...styles.icon, ...style}} />
);

export default Help;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

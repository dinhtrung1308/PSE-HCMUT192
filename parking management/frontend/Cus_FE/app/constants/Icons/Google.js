import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';

const Google = ({style}) => (
  <Icon name="google" style={{...styles.icon, ...style}} />
);

export default Google;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 50,
    color: 'white',
  },
});

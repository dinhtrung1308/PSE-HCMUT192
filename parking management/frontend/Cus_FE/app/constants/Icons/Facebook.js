import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';

const Facebook = ({style}) => (
  <Icon name="facebook" style={{...styles.icon, ...style}} />
);

export default Facebook;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 50,
    color: 'white',
  },
});

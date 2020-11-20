import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {StyleSheet} from 'react-native';

const ArrowRight = ({style}) => (
  <Icon name="arrow-right" style={{...styles.icon, ...style}} />
);

export default ArrowRight;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

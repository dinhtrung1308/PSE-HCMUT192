import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

const Connected = ({style}) => (
  <Icon name="check" style={{...styles.icon, ...style}} />
);

export default Connected;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: 'white',
  },
});

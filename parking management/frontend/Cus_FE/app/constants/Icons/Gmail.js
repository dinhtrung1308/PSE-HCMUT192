import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

const Gmail = ({style}) => (
  <Icon name="gmail" style={{...styles.icon, ...style}} />
);

export default Gmail;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

const SadFace = ({style}) => (
  <Icon name="emoticon-sad" style={{...styles.icon, ...style}} />
);

export default SadFace;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

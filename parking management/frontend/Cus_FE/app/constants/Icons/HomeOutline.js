import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

const HomeOutline = ({style}) => (
  <Icon name="home-outline" style={{...styles.icon, ...style}} />
);

export default HomeOutline;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

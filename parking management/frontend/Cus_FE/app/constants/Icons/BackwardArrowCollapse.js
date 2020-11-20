import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

const BackwardArrowCollapse = () => (
  <Icon name="arrow-collapse-left" style={styles.icon} />
);

export default BackwardArrowCollapse;

// Styling
const styles = StyleSheet.create({
  icon: {
    color: 'white',
    fontSize: 30,
  },
});

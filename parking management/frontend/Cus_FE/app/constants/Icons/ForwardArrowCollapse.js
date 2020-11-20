import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

const ForwardArrowCollapse = () => (
  <Icon name="arrow-collapse-right" style={styles.icon} />
);

export default ForwardArrowCollapse;

// Styling
const styles = StyleSheet.create({
  icon: {
    color: 'white',
    fontSize: 30,
  },
});

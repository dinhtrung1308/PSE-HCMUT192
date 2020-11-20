import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

const Setting = ({style}) => (
  <Icon name="settings-outline" style={{...styles.icon, ...style}} />
);

export default Setting;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

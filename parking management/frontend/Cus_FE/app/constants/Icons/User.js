import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet} from 'react-native';

const User = ({style}) => (
  <Icon name="user-alt" style={{...styles.icon, ...style}} />
);

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

export default User;

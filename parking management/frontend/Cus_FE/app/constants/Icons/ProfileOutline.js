import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';

const ProfileOutline = ({style}) => (
  <Icon name="user-circle" style={{...styles.icon, ...style}} />
);

export default ProfileOutline;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

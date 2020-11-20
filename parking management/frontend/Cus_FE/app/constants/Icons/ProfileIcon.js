import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';

const ProfileIcon = ({style}) => (
  <Icon name="user-circle" style={{...styles.icon, ...style}} />
);

export default ProfileIcon;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

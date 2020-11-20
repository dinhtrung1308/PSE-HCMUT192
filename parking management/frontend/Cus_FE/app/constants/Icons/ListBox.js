import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';

const ListBox = ({style}) => (
  <Icon name="md-list-box" style={{...styles.icon, ...style}} />
);

export default ListBox;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';

const List = ({style}) => (
  <Icon name="md-list" style={{...styles.icon, ...style}} />
);

export default List;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

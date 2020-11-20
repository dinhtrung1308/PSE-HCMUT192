import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

const Home = ({style}) => (
  <Icon name="home" style={{...styles.icon, ...style}} />
);

export default Home;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

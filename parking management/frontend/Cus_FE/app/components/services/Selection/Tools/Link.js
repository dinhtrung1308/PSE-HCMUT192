import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import Colors from '../../../../constants/Colors';

const Link = ({name, style}) => {
  return <Text style={{...styles.link, ...style}}>{name}</Text>;
};

export default Link;

// Styling
const styles = StyleSheet.create({
  link: {
    padding: 15,
    color: Colors.link,
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 6,
    textTransform: 'capitalize',
  },
});

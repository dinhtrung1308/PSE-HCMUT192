import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
import {SelectionButton, SearchInput} from './Tools';
import Timing from './Timing';

const Destination = ({navigation}) => (
  <View style={styles.selectionContainer}>
    <SearchInput navigation={navigation} />
    <Timing />
    <SelectionButton />
  </View>
);

export default Destination;

// Styling
const styles = StyleSheet.create({
  selectionContainer: {
    backgroundColor: Colors.selectionBackground,
    flex: 1,
    justifyContent: 'space-between',
  },
});

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SandBox} from './Tools';
import {
  ForwardArrowCollapse,
  BackwardArrowCollapse,
} from '../../../constants/Icons';

const Timing = () => (
  <View style={styles.timingContainer}>
    <SandBox title="Start" />
    <ForwardArrowCollapse />
    <BackwardArrowCollapse />
    <SandBox title="End" />
  </View>
);

export default Timing;

// Styling
const styles = StyleSheet.create({
  timingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

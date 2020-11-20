import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
import {TouchableLink} from './Tools';
import {View} from 'react-native';

const AppPolicies = ({style}) => {
  return (
    <>
      <TouchableLink name="Legal" style={style} />
      <TouchableLink name="Terms" style={style} />
      <TouchableLink name="Privacy" style={style} />
    </>
  );
};

export default AppPolicies;

// Styling
// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: Colors.border.separator,
//   },
// });

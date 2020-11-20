import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppHeader from '../share/header';
import {Intro} from '../components/services';
import Colors from '../constants/Colors';

export default function Services({navigation}) {
  return (
    <View style={styles.container}>
      <AppHeader title="Services" />
      <Intro />
    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
  },
});

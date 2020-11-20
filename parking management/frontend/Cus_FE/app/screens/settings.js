import React from 'react';
import {View} from 'react-native';

import AppHeader from '../share/header';
import {Intro} from '../components/settings';
import {StyleSheet} from 'react-native';

export default function Settings({navigation}) {
  return (
    <View style={styles.container}>
      <AppHeader title="Settings" />
      <Intro />
    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

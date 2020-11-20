import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ContactLinks, AppPolicies, Services, Version} from '../Selection';
import Colors from '../../../constants/Colors';

const Intro = () => {
  return (
    <View style={styles.introContainer}>
      <Services />
      <ContactLinks style={styles.contact} />
      <AppPolicies />
      <Version version="0.1.0" releaseDate="14-June-2020/VietNam" />
    </View>
  );
};

export default Intro;

// Styling
const styles = StyleSheet.create({
  introContainer: {
    flex: 1,
    marginTop: 10,
  },

  contact: {
    marginTop: 10,
  },
});

import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const Version = ({version, releaseDate}) => {
  // Constants
  const copyright = '\u00A9';
  const versionInfo = `Version ${version} (${releaseDate})`;
  const companyInfo = `${copyright}2020 YourBike and CarPark, Inc`;
  // END Constants

  // Handler Functions

  // END Handler Functions

  // Return component
  return (
    <View style={styles.versionContainer}>
      <Text style={styles.versionInfo}>{versionInfo}</Text>
      <Text style={styles.versionInfo}>{companyInfo}</Text>
    </View>
  );
};

export default Version;

// Styling
const styles = StyleSheet.create({
  versionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    left: 15,
    bottom: 15,
  },

  versionInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text.version,
  },
});

import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import SwitchToggle from '../Tools/SwitchToggle';
import Colors from '../../../constants/Colors';

const Settings = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <SwitchToggle style={styles.switch} />
    </View>
  );
};

export default Settings;

// Styling
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: Colors.border.separator,
    marginBottom: 10,
    borderBottomWidth: 1,
  },

  switch: {
    marginRight: 20,
    marginTop: 20,
    marginBottom: 10,
  },

  text: {
    color: Colors.text.secondary,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
  },
});

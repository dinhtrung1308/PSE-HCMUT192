import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';

function SandBox({title}) {
  // Handler functions
  // END Handler functions

  // Export output
  return (
    <TouchableWithoutFeedback>
      <View style={styles.sandBoxContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SandBox;

// Styling
const styles = StyleSheet.create({
  sandBoxContainer: {
    width: 141,
    height: 78,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  title: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

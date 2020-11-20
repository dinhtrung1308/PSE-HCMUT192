import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../../../../constants/Colors';

const SelectionButton = () => (
  <View style={styles.buttonContainer}>
    <Button
      title="Select this destination"
      type="outline"
      buttonStyle={styles.confirmBtn}
      titleStyle={styles.buttonTitle}
    />
  </View>
);

export default SelectionButton;

// Styling
const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 15,
    justifyContent: 'flex-end',
  },

  confirmBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.btn_secondary,
  },

  buttonTitle: {
    textTransform: 'uppercase',
    color: Colors.primary.dark,
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const Message = ({message, style, textStyle, icon}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <Text style={{...styles.message, ...textStyle}}>{message}</Text>
      {icon()}
    </View>
  );
};

export default Message;

// Stylings
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },

  message: {
    fontSize: 20,
    marginBottom: 5,
    color: Colors.text.secondary,
    textTransform: 'capitalize',
  },
});

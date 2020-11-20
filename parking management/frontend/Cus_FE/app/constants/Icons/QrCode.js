import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet} from 'react-native';

const QrCode = ({style}) => (
  <Icon name="qrcode" style={{...styles.icon, ...style}} />
);

export default QrCode;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

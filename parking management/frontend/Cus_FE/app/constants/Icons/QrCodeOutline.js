import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';

const QrCodeOutline = ({style}) => (
  <Icon name="qrcode" style={{...styles.icon, ...style}} />
);

export default QrCodeOutline;

// Styling
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

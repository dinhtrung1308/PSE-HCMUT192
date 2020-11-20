import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
} from 'react-native';
import {QrCodeOutline} from '../constants/Icons';
import AppHeader from '../share/header';
import Colors from '../constants/Colors';
import QRCode from 'react-native-qrcode-svg';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

export default function QrCode({navigation}) {
  const token = useSelector(state => state.token);

  const [qrCodeValue, setQrCodeValue] = useState(token.toString());

  //* Handler Functions
  const touchScreenHandler = () => {
    Keyboard.dismiss();
  };

  const qrCodeImageGenerator = () => {
    if (qrCodeValue !== '') {
      return (
        <View style={styles.qrCodeContainer}>
          <QRCode value={qrCodeValue} size={280} />
        </View>
      );
    }
    return <QrCodeOutline style={styles.mainQrCodeIcon} />;
  };

  // End Handler Functions

  return (
    <TouchableWithoutFeedback onPress={touchScreenHandler}>
      <View style={styles.mainContainer}>
        <AppHeader title="QrCode Scanner" />
        {qrCodeImageGenerator()}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  mainQrCodeIcon: {
    flex: 1,
    marginTop: 50,
    fontSize: 280,
    paddingVertical: 30,
    textAlign: 'center',
  },

  navigationBtn: {
    backgroundColor: Colors.button.qr_selection,
    borderRadius: 15,
    marginHorizontal: 45,
    marginBottom: 35,
    paddingVertical: 15,
  },

  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },

  qrCodeValueContainer: {
    backgroundColor: Colors.text_holder.qr_code,
    borderRadius: 15,
    marginHorizontal: 45,
    marginBottom: 35,
    paddingVertical: 13,
  },

  qrCodeValue: {
    color: Colors.text.qr_code,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  qrCodeContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30,
    marginTop: 50,
  },
});

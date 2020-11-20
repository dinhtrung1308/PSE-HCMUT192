import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Keyboard} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {GoogleSignin} from '@react-native-community/google-signin';
import {Google} from '../../constants/Icons';

import {setToken} from '../../redux/action';
import {useDispatch} from 'react-redux';

GoogleSignin.configure({
  webClientId: '',
});

const GoogleSignInButton = () => {
  Keyboard.dismiss();
  const dispatch = useDispatch();

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    auth().signInWithCredential(googleCredential);

    let token = await (await auth().currentUser.getIdTokenResult()).token;

    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token: token, role: 'customer'}),
    };

    setTimeout(function() {
      fetch('http://103.1.237.169:3030/api/login/user', requestOptions)
        .then(response => {
          dispatch(setToken(token));
        })
        .catch(Error => console.log(Error));
    }, 5000);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onGoogleButtonPress}>
        <Google style={styles.googleIcon} />
        <Text style={styles.text}> Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#e40d0d',
    padding: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 5,
  },
  googleIcon: {
    fontSize: 30,
    color: 'white',
  },
});

export default GoogleSignInButton;

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Facebook} from '../../constants/Icons';

import {LoginManager, AccessToken} from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';

import {setToken} from '../../redux/action';
import {useDispatch} from 'react-redux';

const FacebookSignInButton = () => {
  const dispatch = useDispatch();

  const onFacebookButtonPress = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    //return
    auth().signInWithCredential(facebookCredential);

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
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onFacebookButtonPress}>
        <Facebook style={styles.facebookIcon} />
        <Text style={styles.text}>Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 10,
  },

  button: {
    flexDirection: 'row',
    backgroundColor: '#1a68b6',
    padding: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 10,
  },

  facebookIcon: {
    fontSize: 30,
    color: 'white',
  },
});

export default FacebookSignInButton;

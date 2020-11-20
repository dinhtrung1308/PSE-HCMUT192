import React from 'react';
import {View, Text, StyleSheet, Keyboard} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import FacebookSignInButton from './signFacebook';
import GoogleSignInButton from './signinGoogle';
import LoginForm from './loginForm';

// Handler Functions
const touchScreenHandler = () => Keyboard.dismiss();
// END Handler Functions

const SignIN = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={touchScreenHandler}>
      <View style={styles.background}>
        <View style={styles.container}>
          <LoginForm navigation={navigation} />

          <View style={styles.button}>
            <FacebookSignInButton />
            <GoogleSignInButton />
          </View>
        </View>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpMessage}>Didn't have an account yet? </Text>
          <TouchableOpacity onPress={() => navigation.replace('Sign up')}>
            <Text style={styles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.optionContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Help')}>
            <Text style={styles.optionLink}>Help</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.optionLink}>Contact</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.optionLink}>About Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
  },
  container: {
    backgroundColor: '#ffffff',
    marginVertical: 50,
    marginBottom: 50,
    paddingBottom: 20,
    marginHorizontal: 30,
    borderRadius: 20,

    elevation: 10,
  },
  button: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signUpMessage: {
    fontSize: 20,
  },
  signUpLink: {
    fontSize: 20,
    color: 'blue',
    textDecorationLine: 'underline',
    textTransform: 'capitalize',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  optionLink: {
    fontSize: 15,
    color: 'blue',
  },
});

export default SignIN;

import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Lock, User} from '../../constants/Icons';
import Colors from '../../constants/Colors';

import auth from '@react-native-firebase/auth';

const SignUP = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const createUser = async () => {
    //create User in auth
    auth()
      .createUserWithEmailAndPassword(username, password)
      .then(() => {
        console.log('User account created');
        alert('Create user success !!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });

    let name = await auth().currentUser;
    let token = await (await auth().currentUser.getIdTokenResult()).token;

    let bodyRequest = {
      token: token,
      name: name.email,
      role: 'customer',
    };

    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyRequest),
    };

    //create User in database
    setTimeout(function() {
      fetch('http://103.1.237.169:3030/api/login/user/signUp', requestOptions)
        .then(() => alert('store success'))
        .catch(Error => alert(Error));
    }, 5000);
  };

  //check Inputs of customer
  const checkValid = () => {
    let checkUsername = username.indexOf('@'); // return -1 if there no @ sign
    let checkPassword = password.length;

    if (checkUsername === -1) {
      alert('Your username is invalid');
    } else if (checkPassword < 6) {
      alert('Your password too weak');
    } else {
      createUser();
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.usernameInputContainer}>
          <User style={styles.usernameIcon} />
          <TextInput
            style={styles.usernameInput}
            placeholder="user@example.com"
            onChangeText={text => setUsername(text)}
          />
        </View>

        <View style={styles.passwordInputContainer}>
          <Lock style={styles.lockIcon} />
          <TextInput
            secureTextEntry={true}
            style={styles.passwordInput}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
          />
        </View>

        <TouchableOpacity style={styles.signUpBtn} onPress={() => checkValid()}>
          <Text style={styles.signUpBtnText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backToLoginBtn}
          onPress={() => navigation.replace('Sign in')}>
          <Icon name="arrow-left" size={30} />
          <Text style={styles.backToLoginBtnText}>Go back to login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
  },
  container: {
    backgroundColor: '#ffffff',
    marginVertical: 50,
    marginBottom: 200,
    paddingBottom: 20,
    marginHorizontal: 30,
    borderRadius: 20,

    elevation: 10,
  },
  usernameInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.border.active,
    borderWidth: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    paddingLeft: 20,
  },
  usernameInput: {
    paddingLeft: 15,
    fontSize: 20,
  },
  usernameIcon: {
    fontSize: 25,
    color: Colors.icon.login,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.border.inactive,
    borderWidth: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    paddingLeft: 20,
  },
  passwordInput: {
    paddingLeft: 15,
    fontSize: 20,
  },
  lockIcon: {
    fontSize: 25,
    color: Colors.icon.login,
  },
  signUpBtn: {
    alignSelf: 'center',
    backgroundColor: Colors.button.sign_up,
    padding: 10,
    paddingHorizontal: 90,
    marginTop: 10,
    borderRadius: 20,
  },
  signUpBtnText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: Colors.text.sign_up,
  },
  backToLoginBtn: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#419e52',
    padding: 10,
    paddingHorizontal: 5,
    marginTop: 50,
    borderRadius: 20,
  },
  backToLoginBtnText: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 60,
  },
});
export default SignUP;

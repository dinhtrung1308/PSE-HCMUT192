import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {setToken} from '../../redux/action';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Keyboard} from 'react-native';
import {User, Lock} from '../../constants/Icons';
import Colors from '../../constants/Colors';

const LoginForm = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(true);

  const dispatch = useDispatch();

  const signInHandler = async () => {
    //* Handling Functions
    Keyboard.dismiss();

    auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        console.log('User signed in !!');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });

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
          console.log(token);
          setAuthenticated(response);
          dispatch(setToken(token));
        })
        .catch(Error => console.log(Error));
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={authenticated ? {color: '#ffffff'} : styles.enterWrong}>
        You enter wrong username or password
      </Text>

      <View style={styles.usernameInputContainer}>
        <User style={styles.userIcon} />
        <TextInput
          style={styles.usernameInput}
          placeholder="Username"
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

      <View>
        <TouchableOpacity
          style={styles.signInBtn}
          onPress={() => signInHandler()}>
          <Text style={styles.signInBtnText}>SIGN IN</Text>
        </TouchableOpacity>

        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>OR</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  enterWrong: {
    color: 'red',
    textAlign: 'center',
  },
  usernameInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.border.active,
    borderWidth: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingLeft: 20,
    borderRadius: 20,
  },
  usernameInput: {
    paddingLeft: 15,
    fontSize: 20,
  },
  userIcon: {
    fontSize: 25,
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
  },
  signInBtn: {
    alignSelf: 'center',
    backgroundColor: Colors.button.sign_in,
    padding: 10,
    paddingHorizontal: 110,
    marginTop: 10,
    borderRadius: 20,
  },
  signInBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text.sign_in,
    textTransform: 'uppercase',
  },
  optionTextContainer: {
    marginVertical: 10,
    marginHorizontal: 140,
    borderBottomColor: 'black',
    borderTopColor: 'black',
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AppHeader from '../share/header';
import {Intro, Destination} from '../components/home';

import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {setToken} from '../redux/action';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('user sign out'));

    dispatch(setToken(''));
  };

  // Handler Functions
  const touchScreenHandler = () => {
    Keyboard.dismiss();
  };

  // End Handler Functions

  return (
    <TouchableWithoutFeedback onPress={touchScreenHandler}>
      <View style={styles.homeContainer}>
        <AppHeader title="Your Bike" />
        <Intro navigation={navigation} />
        <Destination navigation={navigation} />
        <Button
          style={styles.signOutBtn}
          title="Sign Out"
          onPress={() => signOut()}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },

  signOutBtn: {
    position: 'absolute',
  },
});

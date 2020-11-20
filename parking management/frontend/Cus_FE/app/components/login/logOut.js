import React from 'react';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native';

const logOut = () => {
  auth()
    .signOut()
    .then(() => console.log('User sign out!'));
};

const LogOutButton = () => {
  return <Button title="Log Out" onPress={logOut} />;
};

export default LogOutButton;

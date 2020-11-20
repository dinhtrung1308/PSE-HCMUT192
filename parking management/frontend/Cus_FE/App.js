import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import Login from './app/components/login/Login';
import About from './app/screens/about';

import Home from './app/components/home/Home';
import {firebase} from '@react-native-firebase/auth';

export default function App() {
  console.disableYellowBox = true;
  const user = useSelector(state => state.token);

  const config = {
    apiKey: 'AIzaSyDYrcMfI4fpe2nwerCr9uodkZMsPvPaN4I',
    projectId: 'your-bike-99fc2',
    appId: '561448137776',
    databaseURL: 'https://your-bike-99fc2.firebaseio.com',
    storageBucket: 'your-bike-99fc2.appspot.com',
    messagingSenderId: 'hello',
  };
  firebase.initializeApp(config);

  if (!user) {
    return <Login />;
  }

  if (user) {
    return <Home />;
  }
}

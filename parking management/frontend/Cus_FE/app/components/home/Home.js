import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import About from '../../screens/about';
import HomeNavigationScreen from '../../routers/homeStack';
import Help from '../../screens/help';
import Services from '../../screens/services';
import Map from '../../screens/map';

const LoginStack = createStackNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator>
        <LoginStack.Screen
          name="HomeScreen"
          component={HomeNavigationScreen}
          options={{headerShown: false}}
        />
        <LoginStack.Screen
          name="About"
          component={About}
          options={{title: 'About Us'}}
        />
        <LoginStack.Screen
          name="Help"
          component={Help}
          options={{title: 'Help'}}
        />
        <LoginStack.Screen
          name="Services"
          component={Services}
          options={{title: 'Services'}}
        />
        <LoginStack.Screen
          name="Map"
          component={Map}
          options={{title: 'Map'}}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

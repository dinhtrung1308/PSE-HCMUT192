import {createStackNavigator} from 'react-navigation-stack';

import About from '../screens/about';

import AppHeader from '../share/header';
import React from 'react';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({navigation}) => {
      return {
        headerTitleAlign: 'center',
        headerTitle: () => <AppHeader navigation={navigation} />,
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {backgroundColor: 'green', height: 70},
  },
});

export default AboutStack;

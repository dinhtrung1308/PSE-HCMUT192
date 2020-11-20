import {createStackNavigator} from 'react-navigation-stack';

import Services from '../screens/services';

import AppHeader from '../share/header';
import React from 'react';

const screens = {
  Services: {
    screen: Services,
    navigationOptions: ({navigation}) => {
      return {
        headerTitleAlign: 'center',
        headerTitle: () => <AppHeader navigation={navigation} />,
      };
    },
  },
};

const ServiceStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {backgroundColor: 'green', height: 70},
  },
});

export default ServiceStack;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeOutline,
  Home as HomeIcon,
  List,
  ListBox,
  Setting,
  SettingOutline,
  QrCode as QrCodeIcon,
  QrCodeOutline,
  ProfileIcon,
  ProfileOutline,
} from '../constants/Icons';
import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

import Home from '../screens/home';
import Services from '../screens/services';
import Settings from '../screens/settings';
import QrCode from '../screens/qrCode';
import Profile from '../screens/profileManager';
// import AppHeader from '../share/header';

// Tab Navigator
const MainScreenTab = createBottomTabNavigator();

// Navigation Components
const SettingsStack = createStackNavigator();
const ServicesStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
// END Navigation Components

// Navigation Screens

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
  </HomeStack.Navigator>
);

const ServicesStackScreen = () => (
  <ServicesStack.Navigator>
    <ServicesStack.Screen
      name="Services"
      component={Services}
      options={{headerShown: false}}
    />
  </ServicesStack.Navigator>
);

const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name="Services"
      component={Settings}
      options={{headerShown: false}}
    />
  </SettingsStack.Navigator>
);

const QrCodeStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name="QrCode"
      component={QrCode}
      options={{headerShown: false}}
    />
  </SettingsStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{headerShown: false}}
    />
  </ProfileStack.Navigator>
);
// END Navigation Screens

// Navigation Tab Screen
const HomeNavigationScreen = () => (
  <MainScreenTab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        if (route.name === 'Home') {
          return focused ? (
            <HomeIcon style={styles.NavigationIcon_focus} />
          ) : (
            <HomeOutline style={styles.NavigationIcon} />
          );
        } else if (route.name === 'Services') {
          return focused ? (
            <ListBox style={styles.NavigationIcon_focus} />
          ) : (
            <List style={styles.NavigationIcon} />
          );
        } else if (route.name === 'Settings') {
          return focused ? (
            <Setting style={styles.NavigationIcon_focus} />
          ) : (
            <SettingOutline style={styles.NavigationIcon} />
          );
        } else if (route.name === 'QrCode') {
          return focused ? (
            <QrCodeIcon style={styles.NavigationIcon_focus} />
          ) : (
            <QrCodeOutline style={styles.NavigationIcon} />
          );
        } else if (route.name === 'Profile') {
          return focused ? (
            <ProfileIcon style={styles.NavigationIcon_focus} />
          ) : (
            <ProfileOutline style={styles.NavigationIcon} />
          );
        }

        return null;
      },
    })}>
    <MainScreenTab.Screen name="Home" component={HomeStackScreen} />
    <MainScreenTab.Screen name="Services" component={ServicesStackScreen} />
    <MainScreenTab.Screen name="Settings" component={SettingsStackScreen} />
    <MainScreenTab.Screen name="QrCode" component={QrCodeStackScreen} />
    <MainScreenTab.Screen name="Profile" component={ProfileStackScreen} />
  </MainScreenTab.Navigator>
);

// END Navigation Tab Screen

export default HomeNavigationScreen;

// Styling
const styles = StyleSheet.create({
  NavigationIcon_focus: {
    color: Colors.icon.navigation_focus,
  },

  NavigationIcon: {
    color: Colors.icon.navigation,
  },
});

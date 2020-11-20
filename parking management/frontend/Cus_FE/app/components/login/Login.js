import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIN from './signIn';
import SignUP from './signUp';
import About from '../../screens/about';
import Help from '../../screens/help';
import Contact from '../../screens/contact';

const Stack = createStackNavigator();

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Your{'\n'}Bike</Text>
    </View>
  );
};

const headerOptions = {
  headerBackground: () => (
    <Image
      source={require('../../constants/images/headerIMG.jpg')}
      style={styles.headerImg}
    />
  ),
  headerStyle: {height: 200},
  headerTitle: () => <Header />,
};

const Login = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign in"
          component={SignIN}
          options={headerOptions}
        />
        <Stack.Screen
          name="Sign up"
          component={SignUP}
          options={headerOptions}
        />
        <Stack.Screen name="About Us" component={About} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  headerImg: {
    height: 200,
  },
});

export default Login;

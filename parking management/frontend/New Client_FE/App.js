import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './components/Login_SignUp/Welcome';
import SignUp from './components/Login_SignUp/SignUp';
import Login from './components/Login_SignUp/Login';
import Edit from './components/Service/editProfile';
import License from './components/Service/enterLicense';
import Customer from './components/Service/customerList';
import Scan from './components/Service/scanQR';
import Camera from './components/camera';
import {useSelector} from 'react-redux';
const Stack = createStackNavigator();

export default function App () {
        return(
            <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
              headerStyle:{
                backgroundColor: '#00ff7f'
              },
              headerTintColor: '#ffffff'
            }}
            >
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="Sign up" component={SignUp}/>
                <Stack.Screen name="Login" component={Login}/> 
                <Stack.Screen name="Data Manager" component={Edit}/>
                <Stack.Screen name="Customer List" component={Customer}/>
                <Stack.Screen name="Scan QR" component={Scan}/>
                <Stack.Screen name="Enter customer license" component={License}/>
                <Stack.Screen name="Scanning" component={Camera}/>
            </Stack.Navigator>
            </NavigationContainer>
           
        );

} 


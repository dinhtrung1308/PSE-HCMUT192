import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Login from './components/Login'
import Scan from './components/scanQR';
import Enter from './components/enterLicense';
import Edit from './components/editProfile';
import Customer from './components/customerlist';
export default class App extends Component {
    render(){
        return(
            <View style={styles.container}> 
               <Customer/>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});
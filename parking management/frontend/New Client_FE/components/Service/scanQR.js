import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function App ({navigation}) {
        return(
            <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Scanning')}}>
              <Text style={styles.text}>Click here to Scan</Text>
            </TouchableOpacity>
            </View>
        );
}

const styles = StyleSheet.create({
        container: {
          flex:1,
          alignItems: 'center',
          justifyContent: 'center'
        },
        button: {
          backgroundColor: 'orange',
          width: 150,
          height: 40,
          borderRadius: 25
        },
        text: {
          textAlign: 'center',
          marginTop: 8
        }     
});
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
export default function App ({navigation}) {
    return(
        <View style={styles.container}>
        <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Scan QR')}}>
        <Text style={styles.buttText}>Scan IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttText}>Scan OUT</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.text}> List of customers </Text>
        <TextInput
            placeholder={'License plate'}
            placeholderTextColor={'black'}
            style={styles.input}
        />
        <TextInput
            placeholder={'License plate'}
            placeholderTextColor={'black'}
            style={styles.input}
        />
        <TextInput
            placeholder={'License plate'}
            placeholderTextColor={'black'}
            style={styles.input}
        />
        </View>    
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    btnContainer: {
      flexDirection: 'row'
    },
    button: {
      backgroundColor: '#1e90ff',
      height: 35,
      width: 150
    },
    buttText: {
      color: '#ffffff',
      textAlign: 'center',
      marginTop: 5,
      fontSize: 15
    },
    input: {
      backgroundColor: '#b0e0e6',
      borderColor: 'black',
      marginTop: 15,
      width: 300,
      height: 40,
      borderRadius: 30
    },
    text: {
      marginTop: 50,
      fontSize: 25,
      textAlign: 'center'
    }

});
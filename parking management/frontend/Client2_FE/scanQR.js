import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
const {width: WIDTH} = Dimensions.get('window')

export default class App extends Component {
      render(){
        return(
            <View style={styles.container}>
            <Text style={styles.text}> Scan QR </Text>
            <TextInput
                placeholder={'User camera'}
                placeholderTextColor={'black'}
                style={styles.box}
            />
            </View>
        );
      }
}

const styles = StyleSheet.create({
        container: {
          flex:1,
          alignItems: 'center'
        },
        text: {
          marginTop:20,
          fontSize: 40
        },
        box:{
          marginTop: 50,
          backgroundColor: 'powderblue',
          width: WIDTH - 50,
          height: 300,
        }
});
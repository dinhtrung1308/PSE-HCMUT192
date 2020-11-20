import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity} from 'react-native';
const {width: WIDTH} = Dimensions.get('window')

export default class App extends Component {
      render(){
        return(
            <View style={styles.container}>
            <Text style={styles.text}> Enter customer license plate </Text>
            <TextInput
                placeholder={'License plate'}
                placeholderTextColor={'black'}
                style={styles.box1}
            />
            <TextInput
                placeholder={'User input'}
                placeholderTextColor={'black'}
                style={styles.box}
            />
            <TouchableOpacity style={styles.subBtn}>
                <Text  style={styles.text1}>Enter</Text>
            </TouchableOpacity>
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
          fontSize: 35,
          textAlign: 'center'
        },
        box:{
          marginTop: 8,
          backgroundColor: 'powderblue',
          width: WIDTH - 50,
          height: 300,
        },
        box1:{
          marginTop: 100,
          backgroundColor: 'powderblue',
          width: WIDTH - 50,
          height: 50,
        },
        subBtn: {
          marginTop: 20,
          backgroundColor: 'purple',
          width: WIDTH - 280,
          height: 30,
          marginLeft: 220,
        },
        text1: {
          textAlign: 'center',
          color: 'white'
        }
});
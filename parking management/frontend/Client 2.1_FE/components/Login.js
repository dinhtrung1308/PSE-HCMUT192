import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, CheckBox, StyleSheet, Dimensions}
from 'react-native';
const {width:WIDTH} = Dimensions.get('window')
export default class App extends Component {
    render() {
      return(
          <View style={styles.container}>
          <Text style={styles.text}> Login </Text>
          <Text style={styles.textInput}>Username</Text>
          <TextInput
              style={styles.input}
          />
          <Text style={styles.textInput}>Password</Text>
          <TextInput
              secureTextEntry={true}
              style={styles.input2}
          />
          <View style={styles.chboxContainer}>
          <CheckBox style={styles.chBox}></CheckBox>
          <Text style={styles.text2}>Remember me</Text>
          </View>
          <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.text1}>Login</Text>
          </TouchableOpacity>
          </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
    },
    text: {
      alignContent: "center",
      fontSize: 40,
      color: 'blue'
    },
    input: {
      height: 35,
      width: WIDTH,
      marginTop: 15,
      marginHorizontal: 25,
      backgroundColor: 'orange'
    },  
    input2: {
      height: 35,
      width: WIDTH,
      marginTop: 10,
      marginHorizontal: 25,
      backgroundColor: 'orange'
    },
    btnLogin: {
      height: 40,
      marginTop: 15,
      marginLeft: 280,
      backgroundColor: '#000080',
      width: WIDTH - 300
    },
    text1: {
      textAlign: 'center',
      marginTop: 5,
      color: '#ffffff'
    },
    chBox: {
      alignSelf:'center'
    },
    chboxContainer: {
      flexDirection: 'row',
      marginTop: 15,
      marginRight: 250,
    },
    text2: {
      marginLeft: 6,
      fontSize: 17
    },
    textInput: {
      fontSize: 18,
      marginRight: 300
    } 
});
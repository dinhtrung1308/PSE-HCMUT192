import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Dimensions} from 'react-native';
const {width: WIDTH} = Dimensions.get('window')
export default class App extends Component {
  render(){
    return(
        <View style={styles.container}>
        <View style={styles.btnContainer}>
          <Button
              title='Scan IN'
              backgroundColor='green'
              style={styles.btnIn}
          />
          <Button
              title='Scan OUT'
              style={styles.btnOut}
          />
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
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white'
    },
    btnContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    btnIn: {
      width: WIDTH - 100,
      height: 30,
    },
    btnOut: {
       width: WIDTH - 100
    },
    input: {
      backgroundColor: '#b0e0e6',
      borderColor: 'black',
      marginLeft: 40,
      marginTop: 15,
      width: WIDTH - 100,
      height: 35,
      borderRadius: 25
    },
    text: {
      marginTop: 50,
      fontSize: 30,
      marginLeft: 80
    }

});
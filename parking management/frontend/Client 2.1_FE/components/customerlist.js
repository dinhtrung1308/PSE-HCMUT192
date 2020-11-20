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
              style={styles.button}
          />
          <Button
              title='Scan OUT'
              style={styles.button}
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
      flexDirection: 'row',
      marginLeft: 88
    },
    input: {
      backgroundColor: '#b0e0e6',
      borderColor: 'black',
      marginRight: 30,
      marginTop: 15,
      width: WIDTH - 90,
      height: 35
    },
    text: {
      marginTop: 50,
      fontSize: 30,
      marginLeft: 35
    }

});
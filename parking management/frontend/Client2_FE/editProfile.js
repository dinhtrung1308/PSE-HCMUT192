import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Dimensions, TextInput, ScrollView, TouchableOpacity} from 'react-native';
const {width: WIDTH} = Dimensions.get('window')
export default class App extends Component {
    render(){
      return(
            <View style={styles.container}>
            <ScrollView>
            <View style={styles.btnContainer}>
            <Button
                style={styles.btn}
                title='Edit profile'
            />
            <Button
                style={styles.btn}
                title='Customers manager'
            />
            </View>
            <TextInput
                style={styles.input}
                placeholder={'Name'}
                placeholderTextColor={'black'}
            />
            <TextInput
                style={styles.input}
                placeholder={'Location'}
                placeholderTextColor={'black'}
            />
            <TextInput
                style={styles.input}
                placeholder={'Phone number'}
                placeholderTextColor={'black'}
            />
            <TextInput
                style={styles.input}
                placeholder={'Open time'}
                placeholderTextColor={'black'}
            />
            <TextInput
                style={styles.input}
                placeholder={'Close time'}
                placeholderTextColor={'black'}
            />
            <Text style={styles.text}> Avatar </Text>
            <TextInput
                placeholder={'Location image'}
                placeholderTextColor={'black'}
                style={styles.photo}
            />
            <TouchableOpacity style={styles.editBtn}>
                <Text style={styles.text1}>Edit avatar</Text>
            </TouchableOpacity>
            </ScrollView>
            </View>
      );
    }
}

const styles = StyleSheet.create({
          container: {
              flex:1,
              alignItems: 'center',
    
          },
          btnContainer: {
              flexDirection: 'row',
              alignItems: 'center'
          },
          btn: {
              backgroundColor: 'green'
          },
          input: {
              backgroundColor: 'powderblue',
              marginTop: 15,
              height: 38,
              width: WIDTH - 100,
              borderRadius: 25
          },
          text: {
              textAlign: 'center',
              marginTop:20,
              fontSize: 20
          },
          photo: {
              backgroundColor: '#00ff7f',
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
              width: WIDTH - 100
          },
          editBtn: {
              marginTop: 20,
              width: WIDTH - 300,
              height: 35,
              backgroundColor: 'blue',
              borderRadius: 25,
              marginLeft: 200
          },
          text1: {
              textAlign: 'center',
              color: 'white'           
          }
});
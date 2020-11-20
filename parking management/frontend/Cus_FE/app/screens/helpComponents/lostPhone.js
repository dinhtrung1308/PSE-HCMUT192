import React, { useState } from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const RenderLostPhone = () => {
    return (
      <View style = {styles.container}>
        <Text style={styles.title}>We need some informations</Text>

        <Text style = {styles.inputDescription}>Your phone number: </Text>
        <TextInput style = {styles.inputField} placeholder='hello'/>

        <Text style = {styles.inputDescription}>Your username: </Text>
        <TextInput style = {styles.inputField} placeholder='huser'/>

        <Text style = {styles.inputDescription}>Your password: </Text>
        <TextInput style = {styles.inputField} placeholder='pass'/>

        <Text style = {styles.inputDescription}>Arrange your time to meet us for solving the problem: </Text>
        <TextInput 
          style = {styles.inputArea}/>

        <TouchableOpacity style = {styles.submit}>
          <Text style={{fontSize : 20, fontWeight : 'bold'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container : {
    paddingHorizontal : 20,
    paddingVertical: 20
  },
  title : {
    fontSize : 25,
    fontWeight : 'bold',
    paddingBottom : 20
  },
  inputDescription : {
    fontSize : 20,
    padding : 10,
    paddingBottom : 0
  },
  inputField : {
    marginHorizontal: 10,
    borderColor : '#ffffff',
    borderBottomColor : '#76a2fb',
    borderWidth : 2
  },
  inputArea : {
    flex : 1,
    marginHorizontal: 10,
    borderColor : '#76a2fb',
    borderWidth : 2,
    height : 100
  },
  submit : {
    flex : 1,
    alignSelf : 'center',
    borderColor : '#76a2fb',
    borderWidth : 3,
    margin : 30,
    paddingHorizontal: 30,
    paddingVertical : 10,
    borderRadius : 10
  },
})
export default RenderLostPhone
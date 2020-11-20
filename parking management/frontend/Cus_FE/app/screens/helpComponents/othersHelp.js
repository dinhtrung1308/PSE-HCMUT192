import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const RenderOthers = () => {
    return (
        <View>
            <Text style = {styles.inputDescription}>What's the problem</Text>
            <TextInput  style = {styles.inputField}/>

            <Text style = {styles.inputDescription}>Description</Text>
            <TextInput  style = {styles.inputArea}/>

            <Text style = {styles.inputDescription}>How can we help</Text>
            <TextInput  style = {styles.inputArea}/>
        </View>
    )
}

const styles = StyleSheet.create({
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
})
export default RenderOthers
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App ({navigation}) {
    const [fullname,setFull] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();
    const [username,setUser] = useState();
    const [password,setPass] = useState();
    const [password1,setPass1] = useState();
    const [role, setRole] = useState();
    return (
        <View style={styles.container}>
        <TextInput
            placeholder={'Fullname'}
            placeholderTextColor={'black'}
            onChangeText={setFull}
            value={fullname}
            style={styles.userInput}
        />
        <TextInput
            placeholder={'Phone number'}
            placeholderTextColor={'black'}
            onChangeText={setPhone}
            value={phone}
            style={styles.userInput}
        />
        <TextInput
            placeholder={'Email'}
            placeholderTextColor={'black'}
            onChangeText={setEmail}
            value={email}
            style={styles.userInput}
        />
        <TextInput
            placeholder={'Username'}
            placeholderTextColor={'black'}
            onChangeText={setUser}
            value={username}
            style={styles.userInput}
        />
        <TextInput
            placeholder={'Password'}
            placeholderTextColor={'black'}
            secureTextEntry={true}
            onChangeText={setPass}
            value={password}
            style={styles.userInput}
        />
        <TextInput
            placeholder={'Retype your password'}
            placeholderTextColor={'black'}
            secureTextEntry={true}
            onChangeText={setPass1}
            value={password1}
            style={styles.userInput}
        />
        <TextInput
            placeholder={'Role'}
            placeholderTextColor={'black'}
            onChangeText={setRole}
            value={role}
            style={styles.userInput}
        />
        <TouchableOpacity style={styles.crBtn} onPress={confirm}>
        <Text style={styles.text}>Create your account</Text>
        </TouchableOpacity>
        </View>
    );
    function confirm () {
        if ((fullname)&&(phone)&&(email)&&(username)&&(password)&&(password1)&&(role)) {
            if (password == password1){
                alert("Success")
                navigation.navigate('Login')
            } else {
                alert("2 passwords are not match !")
            }   
        } else {
            alert("You have to fill in all of the blanks")
        }
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#ffffff'
        },
        userInput: {
            width: 300,
            height:35,
            borderRadius: 25,
            marginTop: 10,
            backgroundColor: 'powderblue'
        },
        crBtn: {
            backgroundColor: '#483d8b',
            height: 35,
            width: 180,
            marginTop: 10,
            borderRadius: 25
        },
        text: {
            textAlign: 'center',
            marginTop: 8,
            color: '#ffffff'
        }
    }
)
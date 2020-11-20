import React, {useState} from 'react';
import {View,Text,TextInput,TouchableOpacity,CheckBox,StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
//import {setToken} from '../redux/actions/action';
export default function App ({navigation}){
  const [isSelected, setSelection] = useState();
  const [username, setUser] = useState();
  const [password, setPass] = useState();
  return(
    <View style={styles.container}>
    <Text style={styles.title}>Parking Manager</Text>
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
    <View style={styles.chBoxContainer}>
    <CheckBox 
    value={isSelected}
    onValueChange={setSelection}
    style={styles.chBox}/>
    <Text style={styles.text1}>Remember me</Text>
    </View>
    <TouchableOpacity style={styles.loginBtn} onPress={validation}>
    <Text style={styles.text}> Login </Text>
    </TouchableOpacity>
    </View>
  );
  function validation() {
     if(username === 'thanh' && password === '123') {
          navigation.navigate('Data Manager')
     } else {
          alert("Invalid username or password")
     }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue'
  },
  chBoxContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 160
  },
  title:{
    color:'#00008b',
    fontSize: 30
  },
  text: {
    color: '#ffffff',
    marginTop: 10,
    textAlign: 'center'
  },
  text1: {
    marginLeft: 5,
    fontSize: 15
  },
  userInput: {
    backgroundColor: 'orange',
    height: 40,
    marginTop: 10,
    width: 300,
    borderRadius: 25
  },
  loginBtn: {
    backgroundColor: 'indigo',
    marginTop: 30,
    height: 40,
    width: 80,
    borderRadius: 25
  }
})
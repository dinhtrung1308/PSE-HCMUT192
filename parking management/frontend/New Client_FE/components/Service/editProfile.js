import React, {useState} from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { check } from 'react-native-permissions';
export default function App ({navigation}) {
        const [name,setName] = useState();
        const [location,setLocation] = useState();
        const [phone,setPhone] = useState();
        const [oTime,setOpen] = useState();
        const [cTime,setClose] = useState();
        return(
            <View style={styles.container}>
            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Customer List')}}>
            <Text style={styles.buttText}>Customers Manager</Text>
            </TouchableOpacity>
            </View>
            <TextInput
                style={styles.input}
                placeholder={'Name'}
                placeholderTextColor={'black'}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder={'Location'}
                placeholderTextColor={'black'}
                value={location}
                onChangeText={setLocation}
            />
            <TextInput
                style={styles.input}
                placeholder={'Phone number'}
                placeholderTextColor={'black'}
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput
                style={styles.input}
                placeholder={'Open time'}
                placeholderTextColor={'black'}
                value={oTime}
                onChangeText={setOpen}
            />
            <TextInput
                style={styles.input}
                placeholder={'Close time'}
                placeholderTextColor={'black'}
                value={cTime}
                onChangeText={setClose}
            />
            <Text style={styles.text}> Avatar </Text>
            <TextInput
                placeholder={'Location image'}
                placeholderTextColor={'black'}
                style={styles.photo}
            />
            <View style={styles.container2}>
            <TouchableOpacity style={styles.saveBtn} onPress={() => {check()}}>
                <Text style={styles.text1}>Save profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editBtn}>
                <Text style={styles.text1}>Edit avatar</Text>
            </TouchableOpacity>
            </View>
            </View>
      );
      function check(){
          if((name)&&(location)&&(phone)&&(oTime)&&(cTime)){
              if(oTime >= cTime){
                  alert('Please adjust the time')
              }else{
                  alert('Saved')
              }
          }else{
              alert('You have to fill in all blanks')
          }
      }
}

const styles = StyleSheet.create({
          container: {
              flex:1,
              alignItems: 'center',
              backgroundColor: '#ffffff'
          },
          btnContainer: {
              flexDirection: 'row'
          },
          button: {
              backgroundColor: 'dodgerblue',
              height: 35,
              width: 150
          },
          buttText: {
              color: '#ffffff',
              marginTop: 8,
              fontSize: 14,
              textAlign:'center'
          },
          container2: {
              flexDirection: 'row'
          },    
          input: {
              backgroundColor: 'powderblue',
              marginTop: 15,
              height: 35,
              width: 300,
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
              width: 300
          },
          editBtn: {
              marginTop: 20,
              width: 100,
              height: 35,
              backgroundColor: 'blue',
              borderRadius: 25,
              marginLeft: 100
          },
          saveBtn: {
             marginTop: 20,
             width: 100,
             height: 35,
             backgroundColor: 'blue',
             borderRadius: 25
          },
          text1: {
              textAlign: 'center',
              marginTop: 5,
              color: 'white'           
          }
});
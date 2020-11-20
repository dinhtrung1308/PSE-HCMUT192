import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({navigation}) => {
  const [ID, setID] = useState(234);
  const [name, setName] = useState('hello');
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState('');

  // const authUserID = auth().currentUser.uid;
  // setID(authUserID);

  // useEffect(() => {
  //   let fetchAPI = async () => {
  //     const reponse = await fetch('' + ID);
  //     const reponseData = await reponse.json();

  //     setName(reponseData.name);
  //     setPhone(reponseData.phone);
  //     setGender(reponseData.gender);
  //   };
  //   fetchAPI();
  // }, []);

  const onPress = () => {
    let userInfo = {
      name: name,
      phone: phone,
      gender: gender,
    };

    let requestOption = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    };

    fetch('' + ID, requestOption)
      .then(() => console.log('Update data'))
      .catch(error => console.log(error));
  };

  return (
    <ScrollView>
      <View resizeMode="contain" style={styles.header}>
        <Image
          style={styles.headerImg}
          source={require('../constants/images/user.jpg')}
        />
        <Text style={styles.headerName}>{name}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.bodyHeader}>User ID</Text>
        <Text style={styles.bodyUID}>{ID}</Text>

        <View>
          <Text style={styles.bodyHeader}>Name</Text>
          <TextInput
            style={styles.bodyInput}
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>

        <View style={styles.bodyRow}>
          <View style={styles.bodyPhone}>
            <Text style={styles.bodyHeader}>Phone: </Text>
            <TextInput
              style={styles.bodyInput}
              value={phone}
              onChangeText={text => setPhone(text)}
            />
          </View>

          <View style={styles.bodyGender}>
            <Text style={styles.bodyHeader}>Gender: </Text>
            <TextInput
              style={styles.bodyInput}
              value={gender}
              onChangeText={text => setGender(text)}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => onPress()}>
        <Icon name="repeat" size={50} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#34d666',
    paddingVertical: 10,
  },
  headerImg: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    borderRadius: 100,
  },
  headerName: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  body: {
    padding: 20,
  },
  bodyHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
  },
  bodyUID: {
    fontSize: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000000',
    padding: 10,
    backgroundColor: '#a7a7a7',
  },
  bodyInput: {
    fontSize: 18,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000000',
    padding: 10,
  },
  bodyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyPhone: {
    width: 230,
  },
  bodyGender: {
    width: 100,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#34d666',
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;

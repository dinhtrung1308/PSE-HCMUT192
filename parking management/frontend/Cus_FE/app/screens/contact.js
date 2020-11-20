import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';

const Contact = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('../constants/images/contact.jpg')}
        style={styles.headerImg}
      />

      <View style={styles.bodyContainer}>
        <Icon
          name="phone-square"
          size={100}
          color="green"
          style={{paddingTop: 15}}
        />
        <View style={styles.bodyTitle}>
          <Text style={styles.phoneTitle}>Call us</Text>
          <Text style={styles.bodyItem}>0912-3456-78</Text>
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <Icon
          name="facebook-square"
          size={100}
          color="blue"
          style={{paddingTop: 15}}
        />
        <View style={styles.bodyTitle}>
          <Text style={styles.facebookTitle}>See us</Text>
          <Text style={styles.bodyItem}>fb.com/YourBike</Text>
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <Icon
          name="envelope-square"
          size={100}
          color="red"
          style={{paddingTop: 15}}
        />
        <View style={styles.bodyTitle}>
          <Text style={styles.mailTitle}>Mail us</Text>
          <Text style={styles.bodyItem}>YourBike@gmail.com</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  headerImg: {
    height: 300,
    flex: 1,
    alignSelf: 'center',
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  bodyTitle: {
    padding: 10,
  },
  phoneTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'green',
  },
  facebookTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue',
  },
  mailTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
  },
  bodyItem: {
    fontSize: 25,
  },
});

export default Contact;

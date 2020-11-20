import React from 'react';

import {Text, View, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const About = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.introContainer}>
        <Image
          source={require('../constants/images/image1.jpg')}
          style={styles.introImg}
        />
        <View style={styles.introMsgContainer}>
          <Text style={styles.introTitle}>YOUR{'\n'}BIKE</Text>
          <Text style={styles.introDetail}>
            We develop a system to make parking habit more convenience for
            customer with technology
          </Text>
        </View>
      </View>
      <View style={styles.ecoSystemContainer}>
        <Text style={styles.ecoSystemText}>ECOSYSTEM</Text>
        <View style={styles.ecoSystemBorder} />
      </View>

      <View style={styles.qrCodeContainer}>
        <Image
          source={require('../constants/images/qrCode.png')}
          style={styles.qrCodeImg}
        />
        <Text style={styles.qrCodeTitle}>QR Code</Text>
        <Text>
          The most advance feature of our system compare to other parking lots
        </Text>
      </View>

      <View style={styles.cameraContainer}>
        <Image source={require('../constants/images/camera.png')} />
        <Text style={styles.cameraTitle}>High Tech Camera</Text>
        <Text>
          With multiple installation of cameras, we able to manage your vehicles
          with high resolution during day or night
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
  },

  introContainer: {
    height: 300,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    backgroundColor: '#000000',
  },
  introTitle: {
    fontSize: 50,
    color: '#419e52',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  introMsgContainer: {
    flex: 1,
    padding: 10,
  },
  introDetail: {
    marginTop: 30,
    color: '#696969',
    textAlign: 'center',
  },
  introImg: {
    width: 150,
    height: 300,
  },

  ecoSystemContainer: {
    padding: 20,
    paddingVertical: 70,
  },
  ecoSystemText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  ecoSystemBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },

  qrCodeContainer: {
    paddingBottom: 30,
    paddingTop: 30,
  },
  qrCodeTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'center',
    textShadowColor: '#ffffff',
    textShadowRadius: 20,
    textShadowOffset: {width: 10, height: 10},
  },
  qrCodeImg: {
    height: 200,
    width: '100%',
  },

  cameraContainer: {
    paddingVertical: 30,
  },
  cameraTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default About;

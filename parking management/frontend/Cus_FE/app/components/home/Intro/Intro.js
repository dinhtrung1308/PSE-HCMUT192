import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../../constants/Colors';
import {Pricing} from '../Selection';

const Intro = ({navigation}) => (
  <View style={styles.introContainer}>
    {/* <View style={styles.textContainer}>
      <Text style={styles.text_primary}>Best Security.</Text>
      <Text style={styles.text_primary}>Best Prices.</Text>
      <Text style={styles.text_secondary}>Best Parking.</Text>
    </View> */}
    <View style={styles.priceContainer}>
      <Pricing navigation={navigation} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  introContainer: {
    backgroundColor: Colors.background,
    justifyContent: 'flex-start',
    flex: 2,
  },

  textContainer: {
    marginTop: 10,
  },

  text_primary: {
    marginLeft: 35,
    marginVertical: 15,
    fontSize: 24,
  },

  text_secondary: {
    marginLeft: 35,
    marginVertical: 15,
    fontSize: 28,
    color: Colors.primary.light,
    fontWeight: 'bold',
  },

  priceContainer: {
    margin: 10,
  },
});

export default Intro;

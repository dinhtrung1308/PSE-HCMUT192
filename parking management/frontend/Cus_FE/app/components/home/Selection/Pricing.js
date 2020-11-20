import React from 'react';
import {PricingCard} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
import {Keyboard} from 'react-native';

const Pricing = ({navigation}) => {
  // Handler Functions
  const getStartedButtonHandler = () => {
    Keyboard.dismiss();
    navigation.navigate('Help');
  };
  // END Handler Functions

  // export return
  return (
    <PricingCard
      containerStyle={styles.container}
      color="#4f9deb"
      title="Starting From"
      titleStyle={styles.title}
      price="$0.5 to $5"
      pricingStyle={styles.pricing}
      info={['Support Bike', 'Support Car', 'Support Motorbike']}
      infoStyle={styles.info}
      button={{title: 'Get Started', icon: 'flight-takeoff'}}
      onButtonPress={getStartedButtonHandler}
    />
  );
};

export default Pricing;

// Styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.form.info,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
  },

  info: {
    fontSize: 20,
  },

  pricing: {
    fontSize: 30,
    textTransform: 'capitalize',
  },
});

import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Facebook, Gmail, HappyFace} from '../../../constants/Icons';
import Colors from '../../../constants/Colors';
import {ScalableLink} from '../Tools';
import {SettingMenu} from '../Selections';

const Intro = () => {
  // Icons
  const gmailIcon = () => <Gmail style={styles.gmailIcon} />;
  // END Icons

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Connect With</Text>
      <ScalableLink
        name="Facebook"
        icon={Facebook}
        color={Colors.icon.facebook}
        connect={true}
      />
      <ScalableLink
        name="Gmail"
        icon={gmailIcon}
        color={Colors.icon.gmail}
        connect={false}
      />
      <SettingMenu name="Message Review" />
      <Text style={styles.messageText}>We will add more feature latter</Text>
      <HappyFace style={styles.happyIcon} />
    </View>
  );
};

export default Intro;

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    justifyContent: 'flex-start',
  },

  gmailIcon: {
    color: 'white',
    fontSize: 55,
    marginLeft: -5,
  },

  happyIcon: {
    color: Colors.icon.emoji,
    alignSelf: 'center',
  },

  loginText: {
    fontSize: 30,
    color: Colors.text.secondary,
    textTransform: 'capitalize',
    textAlign: 'center',
  },

  messageText: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 20,
    color: Colors.text.secondary,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});

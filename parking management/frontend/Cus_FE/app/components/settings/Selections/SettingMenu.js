import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {SadFace} from '../../../constants/Icons';
import Colors from '../../../constants/Colors';
import {Settings, Message} from '../Tools';

const SettingMenu = () => {
  // Constants
  const sadFace = () => <SadFace style={styles.icon} />;
  // END Constants
  return (
    <View style={styles.container}>
      <Settings name="Message Review" />
      <Settings name="Tracking Position" />
      <Message message="Sorry For Our inconveniences" icon={sadFace} />
    </View>
  );
};

export default SettingMenu;

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 20,
    alignItems: 'center',
  },

  icon: {
    color: Colors.icon.emoji,
  },
});

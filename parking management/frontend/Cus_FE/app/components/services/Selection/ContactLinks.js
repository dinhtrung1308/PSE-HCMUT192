import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Gmail} from '../../../constants/Icons';
import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
import {Link} from './Tools';
import {View} from 'react-native';

const ContactLinks = ({style}) => {
  return (
    <View style={styles.linkContainer}>
      <TouchableOpacity style={{...styles.buttonOpacity, ...style}}>
        <Gmail style={styles.gmailIcon} />
        <Link name="email us" />
      </TouchableOpacity>
    </View>
  );
};

export default ContactLinks;

// Styling
const styles = StyleSheet.create({
  linkContainer: {
    marginTop: 10,
  },

  gmailIcon: {
    color: Colors.link,
  },

  buttonOpacity: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.border.separator,
  },
});

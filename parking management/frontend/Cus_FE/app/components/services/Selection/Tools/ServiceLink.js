import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Link from './Link';
import Colors from '../../../../constants/Colors';
import {Help, ArrowRight} from '../../../../constants/Icons';

const ServiceLink = ({name, style}) => {
  return (
    <TouchableOpacity>
      <View style={{...styles.linkContainer, ...style}}>
        <Help style={styles.helpIcon} />
        <Link name={name} style={styles.linkText} />
        <View style={styles.textContainer}>
          <ArrowRight style={styles.arrowIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceLink;

// Styling
const styles = StyleSheet.create({
  linkContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  helpIcon: {
    color: Colors.icon.help,
    marginRight: 10,
  },

  arrowIcon: {
    color: Colors.icon.opacity,
  },

  textContainer: {},

  linkText: {
    textTransform: 'uppercase',
  },
});

import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Link from './Link';
import Colors from '../../../../constants/Colors';

const TouchableLink = ({name, style}) => {
  return (
    <TouchableOpacity>
      <View style={{...styles.linkContainer, ...style}}>
        <Link name={name} />
      </View>
    </TouchableOpacity>
  );
};

export default TouchableLink;

// Styling
const styles = StyleSheet.create({
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: Colors.border.separator,
  },
});

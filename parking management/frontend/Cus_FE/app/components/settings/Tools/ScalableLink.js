import React from 'react';
import {ListItem} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
import {Connected} from '../../../constants/Icons';

const ScalableLink = ({name, icon, subtitle, color, connect}) => {
  // Constants
  const connectionStatus = connect ? 'Connected' : 'Connect';
  const connectedIcon = () => <Connected style={styles.connectedIcon} />;
  // END Constants
  return (
    <ListItem
      containerStyle={styles.container}
      Component={TouchableScale}
      friction={90} //
      tension={100} // These props are passed to the parent component (here TouchableScale)
      activeScale={0.95} //
      linearGradientProps={{
        colors: color,
        start: {x: 1, y: 1},
        end: {x: 0, y: 0.1},
      }}
      ViewComponent={LinearGradient}
      leftIcon={{Component: icon}}
      title={name}
      rightTitle={connectionStatus}
      rightTitleStyle={
        connect ? styles.rightTitleConnected : styles.rightTitleConnect
      }
      titleStyle={styles.title}
      subtitle={subtitle}
      subtitleStyle={styles.subtitle}
      chevron={
        connect ? {Component: connectedIcon} : {color: 'white', size: 30}
      }
    />
  );
};

export default ScalableLink;

// Styling
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
  },

  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },

  rightTitleConnected: {
    color: Colors.text.status.connected,
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
  },

  rightTitleConnect: {
    color: Colors.text.status.connect,
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
  },

  subtitle: {
    color: 'white',
  },

  connectedIcon: {
    fontSize: 25,
  },
});

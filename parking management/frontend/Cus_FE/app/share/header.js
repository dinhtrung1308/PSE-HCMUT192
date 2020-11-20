import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import Colors from '../constants/Colors';
import {Car} from '../constants/Icons';

export default function AppHeader({title}) {
  const openMenu = () => {
    Alert.alert(
      'Clicked The Header',
      'You just clicked the header',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => console.log('Ok Pressed'),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.header}>
      <View style={styles.topBar} />
      <View style={styles.titleHolder}>
        <Car style={styles.icon} onPressHandler={openMenu} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
  },
  topBar: {
    flex: 1,
    backgroundColor: Colors.primary.dark,
  },
  titleHolder: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: Colors.primary.light,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    flex: 1,
    marginTop: 10,
    marginRight: 15,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  icon: {
    color: Colors.icon.navigation,
  },
});

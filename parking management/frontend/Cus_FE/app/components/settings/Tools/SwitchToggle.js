import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Switch} from 'react-native';

const SwitchToggle = ({style}) => {
  // States
  const [isEnable, setIsEnable] = useState(false);
  // END States

  // Handler Functions
  const toggleSwitch = () => setIsEnable(previousState => !previousState);
  // END Handler Functions

  return (
    <View style={{...styles.container, ...style}}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnable ? '#f4f3f4' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnable}
      />
    </View>
  );
};

export default SwitchToggle;

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React, {useState} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import RenderLostPhone from './helpComponents/lostPhone';
import RenderComplain from './helpComponents/complain';
import RenderOthers from './helpComponents/othersHelp';

const Help = ({navigation}) => {
  console.disableYellowBox = true;

  const [option, setOption] = useState('');

  const textOption = [
    '-- Pick an issues --',
    'I lost my phone',
    'Complain',
    'Others',
  ];

  const RenderExtend = () => {
    switch (option) {
      case '1':
        return <RenderLostPhone />;
      case '2':
        return <RenderComplain />;
      case '3':
        return <RenderOthers />;
      default:
        break;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>What can we do for you</Text>
      <View style={styles.pickerContainer}>
        <Picker
          mode="dropdown"
          selectedValue={option}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setOption(itemValue)}>
          <Picker.Item value="0" label={textOption[0]} />
          <Picker.Item value="1" label={textOption[1]} />
          <Picker.Item value="2" label={textOption[2]} />
          <Picker.Item value="3" label={textOption[3]} />
        </Picker>
      </View>
      {RenderExtend()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  picker: {
    height: 50,
    width: 200,
  },
  pickerContainer: {
    flex: 1,
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#000000',
  },
});
export default Help;

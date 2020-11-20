import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Colors from '../../../../constants/Colors';

const SearchInput = ({navigation}) => {
  // States
  const [searchItem, setSearchItem] = useState('');

  // END States

  // Handler Functions
  const updateSearch = async input => {
    await setSearchItem(input);
  };

  // END Handler Functions

  return (
    <View style={styles.searchContainer}>
      <SearchBar
        searchIcon={null}
        inputStyle={styles.input}
        inputContainerStyle={styles.inputContainer}
        containerStyle={styles.container}
        placeholderTextColor={Colors.placeholder}
        placeholder="Enter Address or Place"
        onFocus={() => navigation.navigate('Map')}
        onChangeText={input => updateSearch(input)}
        value={searchItem}
      />
    </View>
  );
};

export default SearchInput;

// Styling
const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 30,
    marginTop: -25,
  },

  input: {
    backgroundColor: 'white',
    color: Colors.primary.dark,
  },

  inputContainer: {
    backgroundColor: 'white',
    height: 30,
    justifyContent: 'center',
  },

  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
});

import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const RenderComplain = () => {
  const [items, setItems] = useState([
    {name: 'Space', selected: false},
    {name: 'Staff', selected: false},
    {name: 'System', selected: false},
    {name: 'Services', selected: false},
    {name: 'Others', selected: false}
  ])
  const [value, setValue] = useState([])

  const handleClick = prop => {
    let newItems = [...items]
    if(newItems[prop].selected) {
      newItems[prop].selected = false
    } else {
      newItems[prop].selected = true
    }
    setItems(newItems)

    let selectedValue = items.filter((item) => item.selected)
    setValue(selectedValue)
  }

  return (
    <View>
      <Text style = {styles.title}>What do you want us to improve</Text>
      <View style = {styles.itemContainer}>
        <View style = {styles.flexRow}>
          <TouchableOpacity onPress = {() => handleClick(0)}>
            <Text style = {items[0].selected ? styles.selectedItem : styles.item}>{items[0].name}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => handleClick(1)}>
            <Text style = {items[1].selected ? styles.selectedItem : styles.item}>{items[1].name}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => handleClick(2)}>
            <Text style = {items[2].selected ? styles.selectedItem : styles.item} >{items[2].name}</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.flexRow2}>
          <TouchableOpacity onPress = {() => handleClick(3)}>
            <Text style = {items[3].selected ? styles.selectedItem : styles.item}>{items[3].name}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => handleClick(4)}>
            <Text style = {items[4].selected ? styles.selectedItem : styles.item}>{items[4].name}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style = {styles.title}>Give us your opinion</Text>
      <TextInput style = {styles.inputArea}/>

      <TouchableOpacity style = {styles.submit}>
        <Text style={{fontSize : 20, fontWeight : 'bold'}}>Submit</Text>
      </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
  title : {
    padding : 10,
    fontSize : 25,
    fontWeight : 'bold'
  },
  itemContainer : {
    flexDirection : 'column',
  },
  flexRow : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    paddingVertical : 5
  },
  flexRow2 : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    paddingVertical : 5,
    paddingHorizontal : 50
  },
  item : {
    padding : 10,
    borderColor : '#a7a7a7',
    borderWidth : 3,
    borderRadius : 50,
    height : 45,
    width : 90,
    textAlign : "center",
    fontWeight : 'bold',
    fontSize : 18
  },
  inputArea : {
    flex : 1,
    marginHorizontal: 10,
    borderColor : '#a7a7a7',
    borderWidth : 2,
    height : 100
  },
  submit : {
    flex : 1,
    alignSelf : 'center',
    borderColor : '#a7a7a7',
    borderWidth : 3,
    margin : 30,
    paddingHorizontal: 30,
    paddingVertical : 10,
    borderRadius : 10
  }, 
  selectedItem : {
    backgroundColor : '#a7a7a7',
    borderColor : '#a7a7a7',
    padding : 10,
    borderWidth : 3,
    borderRadius : 50,
    height : 45,
    width : 90,
    textAlign : "center",
    fontWeight : 'bold',
    fontSize : 18
  }
})
export default RenderComplain
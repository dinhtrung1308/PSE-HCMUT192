import React ,{Component} from 'react';
import {View,
        Text, 
        StyleSheet, 
        ImageBackground,
        Dimensions,
        TextInput,
        Image,
        TouchableOpacity,
        TouchableOpacityBase,
        AsyncStorage
} from 'react-native';
import bgImage from './image/background2.jpg';
import logo from './image/motor.jpg';
import Icon from 'react-native-vector-icons/Ionicons';

const {width: WIDTH} = Dimensions.get('window')
export default class BikePark extends Component {
    /*constructor (props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    } 
    handleChangeInput = (text) => {
        this.setState({userName: text, password: text})
    } */
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                  <View style = {styles.logoContainer}>
                        <Image source={logo} style={styles.logo}></Image>
                        <Text style = {styles.logoText}> Parking Manager </Text>
                  </View>
                  <View style = {styles.inputContainer}>
                      <Icon name={'ios-person'} size={28} color={'#ffffff'} style={styles.inputIcon}/>
                      <TextInput
                            style={styles.input}
                            placeholder={'Username'}
                            placeholderTextColor={'white'}
                            onChangeText={userName => this.setState({userName})} 
                            value={this.state.userName}
                      />
                  </View>
                  <View style = {styles.inputContainer}>
                      <Icon name={'ios-lock'} size={28} color={'#ffffff'} style={styles.inputIcon}/>
                      <TextInput
                            style={styles.input}
                            placeholder={'Password'}
                            secureTextEntry={true}
                            placeholderTextColor={'white'}
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}
                      />
                  </View>
                <TouchableOpacity style={styles.btnPass} onPress={this.saveData}>
                      <Text style={styles.text}>Remember password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogin} onPress={this.displayData}>
                      <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                </ImageBackground>
        );
    }
    /*saveData () {
        let user = 'Thanh Le';
        AsyncStorage.setItem('user',user);
    }
    
    displayData = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            alert(user);
        }
    
        catch(error) {
            alert(error);
        }
    }*/

}
const styles = StyleSheet.create ({
  backgroundContainer:{ 
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center',
  },
  logoContainer: {
      alignItems: 'center',
      marginBottom: 50
  },
  logo: {
      width: 120,
      height: 120
  },
  logoText: {
      color: "black",
      fontSize: 20,
      fontWeight: '500',
      marginTop: 10,
  },
  input: {
      width: WIDTH - 55,
      height: 40,
      borderRadius: 25,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: '#66cdaa',
      color: 'white',
      marginHorizontal: 25
  },
  inputContainer: {
      marginTop: 10
  },
  inputIcon: {
      position: 'absolute',
      top: 8,
      left: 37
  },
  text: {
      textAlign:'center',
      fontSize: 16,
      color: 'white'
  },
  btnPass: {
      width: WIDTH - 200,
      height: 45,
      borderRadius: 25,
      backgroundColor: 'orange',
      justifyContent: 'center',
      marginTop: 20
  },  
  btnLogin: {
      width: WIDTH - 320,
      height: 45,
      borderRadius: 25,
      backgroundColor: 'purple',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
  }

});


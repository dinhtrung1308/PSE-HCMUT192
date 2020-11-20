import React from 'react';
import {View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native';
export default function App ({navigation}){
  return(
    <View style={styles.container}>
    <Text style={styles.welcomeText}>Welcome to BikePark !</Text>
    <TouchableOpacity style={styles.signupBtn} onPress={() => {navigation.navigate('Sign up')}}>
    <Text style={styles.text1}> Don't have an account? Sign up</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.loginBtn} onPress={() => {navigation.navigate('Login')}}>
    <Text style={styles.text1}> Go to Login </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.fbBtn}>
    <Text style={styles.text2}>Login with Facebook</Text>
    <Image style={styles.photo}
      source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEU7WZj///85V5e7xdtPaaGZqckoTJLN1OM1VJVIY51vhrQyVJfh5O3X3erj6PEzU5WsuNL5+vzU2ujz9fmGlbqlss9BXpsqTpKXpsfCytxziLZadKl9krtXb6WMnMFkequ1vtRieKrvMCCeAAADCUlEQVR4nO3c23KiQBRGYaYjiCba4AkxHuL7v+SMFzOVCmXS0NPFv6m17q3iKxA2tJJlRERERERERERERERERERERERTyz1r7A2LybnS+6YpHjWvzyqtGkvf+NnyfKzazWbz9k0vi7E3dUDOF+6Ut+vtdlvXv35otTC3E33xnq/qn2k2hc41r+dVoM2g8M+p5VJte/lsCV12qUKPTYtC5xbXdW+fIaFzt5cBPjtCV/Y8wVgTOr/re4axJXT+OhRoRBgBtCH05+FAE8Ly/jYcaEKYtRFAC8ImjzhGLQjL95hj1ILw9SMKqC/0y7hdaEAYuQvlheVt4DhqRujz/neEpoRuFnUtNCAsT0Nuek0J81iguNAtht3XGxLeNhMXRt02mRC6YzRQXLioJi50l+irobrwHn+i0RaWy/7X++36S+1hbMY3lec+Q2l7vR+yzqq2y4R3YeZ3wbx67wr/WNC2tZDvrsHH5q2QljzJHYKn0mUz9sYO67APBLbF2Js6sOAL/rIce1MHFiw8WPwSZo97p8CnUCvtE+bz3Czw7rCVvuZ9U7Cwmvw+3BsFhgtzhKohRKgfQoT6IUSoH0KE+iFEqJYrOh0ChcfuRz81Nuxv7r6Zf20TuMa97nzycyr/XSuXYZrebVXWD5MJZVZIkwllVkiTCavJC3OVRY1kwqvKI/9kwpMIMJ3wNnVhfZ+6cP0+deHqMnVhO5u68ENl8E4m3KuMNMmER5WRJplwpwJMJjzJ/JgokbDW+blUIuH6NnXhSmZoSyWcy4w0qYQvMiNNKmElM9KkEso8w0gmPMoAUwl3fmzYv9II67PM5TCRcK0z0iQSvumMNImEc52RJpGw1RlpEgl1nmE86rx5tAn9J/fRyMtLu/8667GOb/MFtFP7pUI3hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+E/0n4GyKuSGmZNRjQAAAAAElFTkSuQmCC'}}
    />
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue'
  },
  welcomeText: {
    fontSize: 29,
    textAlign: 'center',
    color:'#696969'
  },
  text1: {
    color: '#ffffff',
    textAlign: 'center'
  },
  signupBtn: {
    backgroundColor: 'blueviolet',
    width: 225,
    height: 40,
    borderRadius: 25,
    marginTop: 30,
    justifyContent: 'center'
  },
  loginBtn: {
    backgroundColor: 'blue',
    width: 100,
    height: 40,
    borderRadius: 25,
    marginTop: 10,
    justifyContent: 'center'
  },
  fbBtn: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    height: 40,
    borderRadius: 25,
    width: 200,
    justifyContent: 'center'
  },
  text2: {
    color: '#191970',
    marginTop: 10,
    marginLeft: 50
  },
  photo: {
    width: 30,
    height: 30,
    marginTop: -21,
    marginLeft: 10,
    borderRadius: 10
  }

})
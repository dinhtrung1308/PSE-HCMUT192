import React, {Component} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Linking,Text,TouchableOpacity, Alert, StyleSheet} from 'react-native';
export default class App extends Component {
  ifScaned = e => {
    Linking.openURL(e.data).catch(error => 
      Alert.alert("QRCode",e.data));
  }
  render(){
    return(
        <QRCodeScanner
            containerStyle={{backgroundColor:'#ffffff',marginBottom:"50%"}}
            onRead={this.ifScaned}
            reactivate={true}
            permissionDialogMessage="Need Permission to activate Camera"
            reactivateTimeout={10}
            showMarker={true}
            markerStyle={{borderColor:"#ffffff",borderRadius:10}}
            bottomContent={
              <TouchableOpacity onPress={() => {this.ifScaned}}>
                <Text style={{fontSize:21,color:'rgb(0,122,255)'}}> Scan QR code </Text>
              </TouchableOpacity>
            }
        />
    );
  }
}

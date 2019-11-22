import React from 'react';
import {
  Alert,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';

import NavHeade from './components/NavHeade.js';

export default class CashierScreen extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  render() {
    return (
      <ImageBackground
        source={require('./../image/back.jpg')}
        style={{flex: 1, width: '100%', height: '100%'}}>
        <NavHeade />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 70,
          }}>
          <TouchableOpacity
            onPress={this._onPressButton}
            onLongPress={this._onLongPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>$14.99 for 20 gems</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            onLongPress={this._onLongPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>$34.99 for 50 gems</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            onLongPress={this._onLongPressButton}>
            <View style={styles.navBar}>
              <Text style={styles.navBarButton}>God</Text>
              <Image
                style={styles.navBarHeader}
                source={require('../image/HNKB2M.jpg')}
              />

              <Text style={styles.navBarButton}>Mode</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>$99.99 for 1 year Unlimited</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 270,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FACF0C',
  },
  buttonText: {
    padding: 19,
    color: '#FACF0C',
    fontSize: 18,
    fontWeight: 'bold',
  },

  navBarButton: {
    color: '#FACF0C',
    textAlign: 'center',
    width: 65,
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'ariel',
    marginBottom: 10,
  },
  navBarHeader: {
    height: 65,
    //flex: 1,
    //marginLeft:40,
    //marginTop:15,
    //marginRight:40,
    //padding:50,
    // height:10,
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 7,
    height: 30,
    //backgroundColor: '',
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderColor: 'gold',
    alignItems: 'center',
    borderRadius: 35,
  },
});

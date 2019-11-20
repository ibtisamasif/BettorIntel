import React from 'react';
import {Alert, Text, View, TouchableOpacity, StyleSheet,ImageBackground} from 'react-native';

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
      <ImageBackground source={require('./../image/back.jpg')} style={{flex:1,width: '100%', height: '100%'}}>
     
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
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  $99.99 for 1 year Unlimited
                </Text>
              </View>
            </TouchableOpacity>
          </View>
      
        </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#374046',
  },
  text: {
    color: '#EEEEEE',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
  },
  buttonText: {
    padding: 19,
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});

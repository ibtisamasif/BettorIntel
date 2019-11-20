import React from 'react';
import {Alert, Text, View, TouchableOpacity, StyleSheet,ImageBackground} from 'react-native';

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
     
        <View style={styles.container}>
          <View style={styles.navBar}>
            <Text style={styles.navBarButton}>Immortal</Text>
            <Text style={styles.navBarHeader}>ImageCircle</Text>
            <Text style={styles.navBarButton}>Picks</Text>
          </View>
        </View>
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
  containerg: {
    flex: 1,
  },

  container: {
    flex: 0,
  },
  navBarButton: {
    color: 'green',
    textAlign: 'center',
    width: 85,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  navBarHeader: {
    flex: 1,
    color: 'green',
    textAlign: 'center',
    marginBottom: 10,
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 10,
    height: 64,
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'gold',
    alignItems: 'center',
  },
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

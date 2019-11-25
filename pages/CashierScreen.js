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
import LinearGradient from 'react-native-linear-gradient';
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
        source={require('./../image/background2.jpg')}
        style={{flex: 1, width: '100%', height: '100%'}}>
        <NavHeade />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 40,
          }}>
          <TouchableOpacity
            onPress={this._onPressButton}
            onLongPress={this._onLongPressButton}>
            <View style={styles.navBar}>
              <Text style={styles.navBarButton}> BettorIntel Platinum </Text>
            </View>

            <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#191919', 'green']}
            style={styles.button}>
         
              <Text style={styles.buttonText}>1 year Unlimited</Text>
              <View style={styles.SeparatorLine} />
              <Text style={styles.buttonText1}>$150 </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this._onPressButton}
            onLongPress={this._onLongPressButton}>
                 <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#191919', 'green']}
            style={styles.button}>
         
              <Text style={styles.buttonText}>50 Credits</Text>
              <View style={styles.SeparatorLine} />
              <Text style={styles.buttonText1}> $25 </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this._onPressButton}
            onLongPress={this._onLongPressButton}>
                 <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#191919', 'green']}
            style={styles.button}>
         
              <Text style={styles.buttonText}>20 Credits</Text>
              <View style={styles.SeparatorLine} />
              <Text style={styles.buttonText1}> $15 </Text>
            </LinearGradient>
          </TouchableOpacity>

            <TouchableOpacity
              onPress={this._onPressButton}
              onLongPress={this._onLongPressButton}>
              <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#191919', 'green']}
            style={styles.button}>
          
              
                <Text style={styles.buttonText}>5 Credits</Text>
                <View style={styles.SeparatorLine} />
                <Text style={styles.buttonText1}> $5 </Text>
              
              </LinearGradient>
            </TouchableOpacity>
          
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 50,
  },

  button: {
    marginBottom: 30,
    width: 290,
    alignItems: 'center',
    backgroundColor: '#2BAE66FF',
    borderRadius: 10,
    flexDirection: 'row',
  },
  buttonText: {
    padding: 19,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: 200,
    textAlign: 'center',
  },
  buttonText1: {
    padding: 19,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: 90,
    textAlign: 'center',
  },

  navBarButton: {
    color: 'white',
    textAlign: 'center',
    width: 200,
    //marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'ariel',
    marginBottom: 10,
  },

  navBar: {
    flexDirection: 'row',
    paddingTop: 7,
    height: 40,
    borderTopWidth: 7,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: 'green',
    alignItems: 'center',
    borderRadius: 10,
    width: 200,
    marginHorizontal: 45,
  },
});

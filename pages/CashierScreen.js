import React from 'react';
import { Alert, Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';


export default class CashierScreen extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }



  render() {
    return (
<LinearGradient 
     colors={['pink','blue']}
     style = { styles.containerg }
     start={{ x: 1, y: 1 }}
end={{ x: 0, y: 1.5 }}>     
      <View>
        <View style={styles.container}>
          <View style={styles.navBar}>
            <Text style={styles.navBarButton}>Immortal</Text>
            <Text style={styles.navBarHeader}>ImageCircle</Text>
            <Text style={styles.navBarButton}>Picks</Text>
          </View>

        </View>


        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 70 }}>



          <TouchableOpacity onPress={this._onPressButton} onLongPress={this._onLongPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>$14.99 for 20 gems</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressButton} onLongPress={this._onLongPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>$34.99 for 50 gems</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressButton} onLongPress={this._onLongPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>$99.99 for 1 year Unlimited</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>

      </LinearGradient>

    );
  }
}
const styles = StyleSheet.create({
  containerg: {
    flex: 1,
    

  },

  container: {
    flex: 0,
    //backgroundColor: '#374046',

  },
  navBarButton: {
    color: 'blue',
    textAlign: 'center',
    width: 85,
    marginLeft:10,
    fontWeight: 'bold',
    fontSize:20,
    
  },
  navBarHeader: {
    flex: 1,
    color: 'blue',
    
    textAlign: 'center'
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
   // backgroundColor: '#1EAAF1'
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#374046'
  },
  text: {
    color: '#EEEEEE'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius:25,
  },
  buttonText: {
    padding: 19,
    color: 'blue',
    fontSize: 18,
    fontWeight:"bold",
  }
});
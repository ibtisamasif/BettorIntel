import React from 'react';
import { Alert,Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';


export default class CashierScreen extends React.Component {
  _onPressButton() {  
    Alert.alert('You tapped the button!')  
}  

_onLongPressButton() {  
    Alert.alert('You long-pressed the button!')  
}  

  
  
  render() {
    return (

    <View>  
      <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.navBarButton}>Back</Text>
        <Text style={styles.navBarHeader}>Awesome App</Text>
        <Text style={styles.navBarButton}>More</Text>
      </View>
      
    </View>


      <View style={{ justifyContent: 'center', alignItems: 'center',paddingTop:5 }}>



        <TouchableOpacity onPress={this._onPressButton} onLongPress={this._onLongPressButton}>  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>TouchableOpacity</Text>  
                    </View>  
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButton} onLongPress={this._onLongPressButton}>  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>TouchableOpacity</Text>  
                    </View>  
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButton} onLongPress={this._onLongPressButton}>  
                    <View style={styles.button}>  
                        <Text style={styles.buttonText}>TouchableOpacity</Text>  
                    </View>  
                </TouchableOpacity>
                
      </View>
     </View>  
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#374046',
    
  },
  navBarButton: {
    color: '#FFFFFF',
    textAlign:'center',
    width: 64
  },
  navBarHeader: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    backgroundColor: '#1EAAF1'
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
    backgroundColor: '#5ead97'  
},  
buttonText: {  
    padding: 20,  
    color: 'white',  
    fontSize: 18 
  } 
});
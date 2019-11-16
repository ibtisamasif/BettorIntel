import React from 'react';
import { Alert,Text, View, TouchableOpacity, StyleSheet } from 'react-native';
 
export default class CashierScreen extends React.Component {
  _onPressButton() {  
    Alert.alert('You tapped the button!')  
}  

_onLongPressButton() {  
    Alert.alert('You long-pressed the button!')  
}  
  
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
    );
  }
}
const styles = StyleSheet.create({
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
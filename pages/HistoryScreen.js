import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class HistoryScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 50, fontSize: 25 }}>History!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  container: {
    borderWidth: 5,
    flex: 1,
    marginTop: 70,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    alignItems: "center",
  },
  container2: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
});
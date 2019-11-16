//import React, { Component } from 'react';
//import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
//import { DataTable } from 'react-native-paper';
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row} from 'react-native-table-component';
export default class HomeScreen extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3'],
      tableData: [
        ['DAL VS PHI'],
        ['importal Picks'],
        ['importal Picks'],
        
      ],
      widthArr: [160,165]
      
    }
  }
 
  render() {
    const state = this.state;
    return (
      <ScrollView>
              <View style={styles.container}>
        
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead}  widthArr={[160,83,83]} style={styles.head} textStyle={styles.text} />
          
          <Row data={state.tableData}  widthArr={state.widthArr} textStyle={styles.text}/>
          <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text}/>
          <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text}/>
          <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text}/>
          <Row data={[['DAL VS PH'],['SF-1'],['1']]} widthArr={[160,83,82]} textStyle={styles.text}/>
          <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text}/>
          <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text}/>
          <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text}/>
          <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text}/>
          
        </Table>
        
      </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({

  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, height:40}

});
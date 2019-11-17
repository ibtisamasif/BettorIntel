//import React, { Component } from 'react';
//import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
//import { DataTable } from 'react-native-paper';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';
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
      widthArr: [160, 165]

    }
  }

  render() {
    const state = this.state;
    return (
      <View>

        <View style={styles.containernav}>
          <View style={styles.navBar}>
            <Text style={styles.navBarButton}>Immortal</Text>
            <Text style={styles.navBarHeader}>Image Circle</Text>
            <Text style={styles.navBarButton}>Picks</Text>
          </View>

        </View>

        <View style={styles.container}>


          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row data={state.tableHead} widthArr={[160, 83, 83]} style={styles.head} textStyle={styles.text} />

            <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text} />
            <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text} />
            <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text} />
            <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text} />
            <Row data={[['DAL VS PH'], ['SF-1'], ['1']]} widthArr={[160, 83, 82]} textStyle={styles.text} />
            <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text} />
            <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text} />
            <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text} />
            <Row data={state.tableData} widthArr={state.widthArr} textStyle={styles.text} />

          </Table>

        </View>

      </View>


    )
  }

}

const styles = StyleSheet.create({
  containernav: {
    flex: 0,
    backgroundColor: '#374046',

  },
  navBarButton: {
    color: '#FFFFFF',
    textAlign: 'center',
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
  container: { flex: 0, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, height: 40 }

});
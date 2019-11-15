import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { DataTable } from 'react-native-paper';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.datatable }>      
      <DataTable >
        <DataTable.Header>
          <DataTable.Title>Dessert</DataTable.Title>
          <DataTable.Title >Calories</DataTable.Title>
          <DataTable.Title numeric>Fat</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row style={styles.datarow}>
          <DataTable.Cell  style={styles.namecell}>Frozen yogurt</DataTable.Cell>
          <DataTable.Cell style={styles.datacell}>159</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
        </DataTable.Row> 
      </DataTable>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  datacell:
  {
    padding:0,
  },
  namecell:{
   borderColor:'black',
   borderEndWidth:2, 
  },
  datatable:{
    borderWidth:5,
    borderColor:'black',
    padding:20,
    margin:20,

},
datarow:{
borderBottomWidth:2,
borderBottomColor:'black',
}


});
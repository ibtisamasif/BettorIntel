import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import NavHeade from './components/NavHeade.js';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Game', 'Pick', 'Unit'],
      tableData: [['DAL VS PHI'], ['importal Picks'], ['importal Picks']],
      widthArr: [160, 200],
    };
  }

  render() {
    const state = this.state;
    return (
      <ImageBackground
        source={require('./../image/back.jpg')}
        style={{flex: 1, width: '100%', height: '100%'}}>
        <NavHeade />
        <View style={styles.container}>
          <ScrollView style={styles.dataWrapper}>
            <Table
              style={styles.table}
              borderStyle={{borderWidth: 2, borderColor: '#000'}}>
              <Row
                data={state.tableHead}
                widthArr={[160, 83, 116]}
                style={styles.head}
                textStyle={styles.text}
              />
              <Row
                data={state.tableData}
                widthArr={state.widthArr}
                textStyle={styles.text}
              />
              <Row
                data={state.tableData}
                widthArr={state.widthArr}
                textStyle={styles.text}
              />
              <Row
                data={state.tableData}
                widthArr={state.widthArr}
                textStyle={styles.text}
              />
              <Row
                data={state.tableData}
                widthArr={state.widthArr}
                textStyle={styles.text}
              />
              <Row
                data={[['DAL VS PH'], ['SF-1'], ['1']]}
                widthArr={[160, 83, 116]}
                textStyle={styles.text}
              />
              <Row
                data={state.tableData}
                widthArr={state.widthArr}
                textStyle={styles.text}
              />
              <Row
                data={state.tableData}
                widthArr={state.widthArr}
                textStyle={styles.text}
              />
              <Row
                data={state.tableData}
                widthArr={state.widthArr}
                textStyle={styles.text}
              />
              <Row
                data={state.tableData}
                widthArr={state.widthArr}
                textStyle={styles.text}
              />
            </Table>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  dataWrapper: {marginTop: -1},

  container: {padding: 16, paddingTop: 30},
  head: {height: 50, backgroundColor: '#000'},
  text: {
    margin: 6,
    height: 30,
    color: '#5cdb95',
    textAlign: 'center',
    paddingTop: 5,
  },
  table: {
    // backgroundColor: '#202420',
    //backgroundColor: '',
    marginTop: 6,
  },
});

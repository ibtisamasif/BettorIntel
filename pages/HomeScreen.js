import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import LinearGradient from 'react-native-linear-gradient';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3'],
      tableData: [['DAL VS PHI'], ['importal Picks'], ['importal Picks']],
      widthArr: [160, 165],
    };
  }

  render() {
    const state = this.state;
    return (
      <LinearGradient colors={['#6e45e2', '#88d3ce']} style={styles.containerg}>
        <View style={{flex: 1}}>
          <View style={styles.containernav}>
            <View style={styles.navBar}>
              <Text style={styles.navBarButton}>Immortal</Text>
              <Text style={styles.navBarHeader}>Image Circle</Text>
              <Text style={styles.navBarButton}>Picks</Text>
            </View>
          </View>

          <View style={styles.container}>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row
                  data={state.tableHead}
                  widthArr={[160, 83, 83]}
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
                  widthArr={[160, 83, 82]}
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
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  dataWrapper: {marginTop: -1},
  containernav: {
    flex: 0,
    backgroundColor: '#374046',
  },
  containerg: {
    flex: 1,
    backgroundColor: '#854046',
  },
  navBarButton: {
    color: '#FFFFFF',
    textAlign: 'center',
    width: 64,
  },
  navBarHeader: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    backgroundColor: '#1EAAF1',
  },
  container: {flex: 0, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6, height: 40},
});

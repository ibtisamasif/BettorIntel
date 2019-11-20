import React from 'react';
import {View, StyleSheet, Dimensions, ImageBackground} from 'react-native';
import {LineChart} from 'react-native-line-chart';
import {Table, Row, Rows} from 'react-native-table-component';
import {height, width, totalSize} from 'react-native-dimension';

import NavHeade from './components/NavHeade.js';
export default class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name', 'Win', 'Unit'],
      tableData: [
        ['DAL VS PHI', '2', 'c'],
        ['DAL VS PHI', 'b', 'c'],
        ['DAL VS PHI', '2', '3'],
        ['DAL VS PHI', 'b', 'c'],
      ],
    };
  }

  render() {
    const state = this.state;
    const data = {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2, // optional
        },
      ],
    };

    const chartConfig = {
      //backgroundGradientFrom: '#000',
      //backgroundGradientFromOpacity:1,
      //backgroundGradientTo: '#080B14',
      //backgroundGradientToOpacity: 0,
      color: (opacity = 1) => `rgba(250, 250, 0, ${opacity})`,
            //strokeWidth: 20, // optional, default 3
      //barPercentage: 0.5,
    };
    return (
      <ImageBackground
        source={require('./../image/back.jpg')}
        style={{flex: 1, width: '100%', height: '100%'}}>
        <NavHeade />
        <View >
          <LineChart
            style={styles.linechart}
            data={data}
            width={totalSize(45)}
            height={totalSize(25)}
            chartConfig={chartConfig}
          />
        </View>

        <View style={styles.containerTable}>
          <Table
            style={styles.table}
            borderStyle={{borderWidth: 3, borderColor: '#000'}}>
            <Row
              data={state.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows data={state.tableData} textStyle={styles.text} />
          </Table>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {padding: 15, paddingTop: 15},
  head: {height: 40, backgroundColor: '#000'},
  text: {margin: 6, color: '#ffd700', textAlign: 'center'},
  table: {
    backgroundColor: '#202420',
  },
  containerTable: {
    padding: 15,
    paddingTop: 15,
  },
  head: {height: 40, backgroundColor: '#000'},
  text: {margin: 6, color: '#ffd700', textAlign: 'center'},
  table: {
    backgroundColor: '#202420',
  },
  linechart: {
    marginTop: totalSize(3.1),
    margin:10,
  },
});

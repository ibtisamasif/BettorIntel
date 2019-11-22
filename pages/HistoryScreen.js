import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  CheckBox,
  Alert,
  RadioForm,
} from 'react-native';
import {LineChart} from 'react-native-line-chart';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import {totalSize} from 'react-native-dimension';
import Checkbox from 'react-native-custom-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavHeade from './components/NavHeade.js';

export default class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
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
    const element = (data, index) => (
      <View style={styles.btn}>
        <Checkbox
          name="checkbox2"
          checked={true}
          size={30}
          style={{
            backgroundColor: '#f2f2f2',
            color: 'black',
            borderRadius: 5,
            borderWidth: 3,
            margin: 10,
          }}
        />
      </View>
    );
    const element2 = index => (
      <View style={styles.btnunit}>
        <Icon style={{margin: 5}} name="square" size={15} color="#fff" />
        <Icon name="square" size={15} color="#fff" />
      </View>
    );

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
        <View>
          <LineChart
            style={styles.linechart}
            data={data}
            width={totalSize(47)}
            height={totalSize(27)}
            chartConfig={chartConfig}
          />
        </View>

        <View style={styles.container}>
          <Table borderStyle={{borderColor: 'black'}} style={styles.table}>
            <Row
              data={state.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            {state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={
                      cellIndex === 1
                        ? element(cellData, index)
                        : cellIndex === 2
                        ? element2(index)
                        : cellData
                    }
                    textStyle={styles.text}
                  />
                ))}
              </TableWrapper>
            ))}
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
  linechart: {
    marginTop: totalSize(4.3),
    margin: 10,
  },
  row: {
    flexDirection: 'row',
  },
  btn: {
    width: 100,
    height: 20,
    //color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnunit: {
    flexDirection: 'row',
    width: 100,
    height: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },
  //btnText: {textAlign: 'center', color: '#fff'},
});

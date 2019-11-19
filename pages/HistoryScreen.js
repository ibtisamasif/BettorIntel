import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {LineChart} from 'react-native-line-chart';
import {Table, Row, Rows} from 'react-native-table-component';

export default class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3'],
      tableData: [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
      ],
    };
  }

  render() {
    const state = this.state;
    const screenWidth = Dimensions.get('window').width;

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2, // optional
        },
      ],
    };

    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#08130D',
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
    };

    return (
      <View>
        <View style={styles.containernav}>
          <View style={styles.navBar}>
            <Text style={styles.navBarButton}>Immortal</Text>
            <Text style={styles.navBarHeader}>ImageCircle</Text>
            <Text style={styles.navBarButton}>Picks</Text>
          </View>
        </View>

        <View>
          <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
        </View>

        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row
              data={state.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows data={state.tableData} textStyle={styles.text} />
          </Table>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerg: {
    flex: 1,
  },

  containernav: {
    flex: 0,
    backgroundColor: '#374046',
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

  container: {padding: 16, paddingTop: 10, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
});

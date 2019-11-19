import React from 'react';
import {Text, View, StyleSheet, Dimensions,ImageBackground} from 'react-native';
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
        
    backgroundGradientFrom: '#000',
      //backgroundGradientFromOpacity:1,
      //backgroundGradientTo: '#080B14',
      //backgroundGradientToOpacity: 0, 
      color: (opacity = 0) => `rgba(255, 215, 100, ${opacity})`,
      //strokeWidth: 20, // optional, default 3
      //barPercentage: 0.5,
    };

    return (
      <ImageBackground source={require('./../image/back.jpg')} style={{flex:1,width: '100%', height: '100%'}}>
     
        <View style={styles.containernav}>
          <View style={styles.navBar}>
            <Text style={styles.navBarButton}>Immortal</Text>
            <Text style={styles.navBarHeader}>ImageCircle</Text>
            <Text style={styles.navBarButton}>Picks</Text>
          </View>
        </View>

        <View>
          <LineChart
            style={styles.linechart}
            data={data}
            width={330}
            height={230}
            chartConfig={chartConfig}
            
          />
        </View>

        <View style={styles.container}>
          <Table style={styles.table} borderStyle={{borderWidth: 3, borderColor: '#000',}}>
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

  container: {padding: 15, paddingTop: 15, },
  head: {height: 40, backgroundColor:'#000',},
  text: {margin:6, color:'#ffd700',textAlign:'center'},
  table:{
    backgroundColor:'#202420',
    
  },

  linechart:{
   marginTop:15,
   marginHorizontal:15,
   //backgroundColor:'red' 
       
  },
});

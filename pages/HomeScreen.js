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
import CoinItem from './components/CoinItem.js';

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
        source={require('./../image/background2.jpg')}
        style={{flex: 1, width: '100%', height: '100%'}}>
        <NavHeade />
        <View style={styles.listitem}>
          <Text style= {{margin:10,marginHorizontal:30,color:'#fff',fontWeight:'bold',fontSize:18}}>Available Picks</Text>
          <CoinItem />
          <CoinItem />
          <CoinItem />
          <CoinItem />
          <CoinItem />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  dataWrapper: {marginTop: -1},

  container: {padding: 16, paddingTop: 30},
  head: {height: 50, backgroundColor: 'green'},
  text: {
    margin: 6,
    height: 30,
    color: 'white',
    textAlign: 'center',
    paddingTop: 5,
    //color: 'white',
  },
  table: {
    backgroundColor: '#202420',
    //backgroundColor: '',
    marginTop: 6,
},
listitem:{
 
  borderRadius:5,
  margin:12,


},
});

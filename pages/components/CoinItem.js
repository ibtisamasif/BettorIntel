import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
class CoinItem extends React.Component {
  render() {
    let date = new Date();
    let now = date.toLocaleString();

    return (
        <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#003B64','#013220']}
        style={styles.container}>
      
        <Text
          style={[
            styles.text,
            {transform: [{rotate: '270deg'}], fontWeight:'bold'},
          ]}>
          {this.props.name || 'NEL'}
        </Text>
        <View style={styles.SeparatorLine} />
        <Image
          style={{width: 60, height: 50,marginHorizontal:2}}
          //   source={{uri: 'https://bitcoin.org/img/icons/opengraph.png'}}
          source={require('../../image/im.png')}
        />
        <Text style={[styles.text, {padding:12}]}>
          {this.props.name || 'VS'}
        </Text>

        <Image
          style={{width: 60, height: 50}}
          //   source={{uri: 'https://bitcoin.org/img/icons/opengraph.png'}}
          source={require('../../image/im.png')}
        />
        <View style={[styles.SeparatorLine,{marginLeft:5}]} />
        <Text style={[styles.text, {width:100,textAlign:'center',fontWeight:'bold'}]}>
          {'DAL -3/2 mints'}
        </Text>
        
      
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 70,
    flexDirection: 'row', // row
    
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-start', // center, space-around
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal:20,
    borderRadius:20,
},
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 70,
  },
  text: {
    color: 'white',
  },
});

export default CoinItem;

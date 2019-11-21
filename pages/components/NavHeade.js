import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class NavHead extends React.Component {
  render() {
    return (
      <View style={styles.containernav}>
        <View style={styles.navBar}>
          <Text style={styles.navBarButton}>IMMORTAL</Text>
          <Image
            style={styles.navBarHeader}
            source={require('../../image/Webp.net-resizeimage.png')}
          />
          <Text style={styles.navBarButton}>PICKS</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containernav: {
    marginTop: 5,
  },
  navBarButton: {
    color: '#FACF0C',
    textAlign: 'center',

    width: 85,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'ariel',
    marginBottom: 10,
  },
  navBarHeader: {
    flex: 1,
    marginLeft: 55,
    marginTop: 20,
    marginRight: 40,
    //padding:55,
    marginBottom: 5,
    // height:10,
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 10,
    height: 64,
    backgroundColor: 'black',
    borderWidth: 2,
    //borderColor: 'gold',
    alignItems: 'center',
  },
});

import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class NavHead extends React.Component {
  render() {
    return (
      // <LinearGradient
      //   start={{x: 0, y: 0}}
      //   end={{x: 1, y: 0}}
      //   colors={['green', '']}
      //   style={styles.linearGradient}>
      //   <View style={styles.navBar}>
      //     <Text style={styles.navBarButton}>IMMORTAL</Text>
      //     <Image
      //       style={styles.navBarHeader}
      //       source={require('../../image/Webp.net-resizeimage.png')}
      //     />
      //     <Text style={styles.navBarButton}>PICKS</Text>
      //   </View>
      // </LinearGradient>

      <View style={styles.linearGradient}>
        <View style={styles.navBar}>
          <Text style={styles.navBarButton}>IMMORTAL</Text>
          <Image
            style={styles.navBarHeader}
            source={require('../../image/Webp.net-resizeimage1.png')}
          />
          <Text style={styles.navBarButton}>PICKS</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBarButton: {
    color: '#fff',
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
    marginTop: 15,
    marginRight: 40,
    //padding:55,
    marginBottom: 15,
    // height:10,
  },
  navBar: {
    flexDirection: 'row',
    //paddingTop: 10,
    height: 64,
    backgroundColor: '#013220',
    //borderWidth: 2,
    //borderColor: 'gold',
   // backgroundColor: '#2BAE66FF',
    alignItems: 'center',
  },
  linearGradient: {
    //marginTop: 5,
    flex: 0,
    //borderWidth: 2,
    //borderRadius: 15,
  },
});

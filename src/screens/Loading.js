import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={{marginTop:80}} source={require('../Image/Loadign_1.png')}/>
        <Image style={{marginVertical:300}} source={require('../Image/signiture.png')}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
    margin:30,
    flexDirection:'column'
  },
});
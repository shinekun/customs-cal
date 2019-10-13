import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mainservice from './service/Mainservice';
import Main from './screens/Main'
import Loading from './screens/Loading'

export default class App extends Component {
  state = {
    loaded: false
  }
  constructor(props) {
    super();

    Mainservice.loadOptions(v => this.setState({ loaded: true }));
  }
  render() {
    return (
      <View>
        {/* {this.state.loaded ? <Main/> : <Loading/>} */}
         <Main/> 

      </View>
    );
  }
}
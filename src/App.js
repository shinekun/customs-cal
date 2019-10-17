import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mainservice from './service/Mainservice';
import Main from './screens/Main'
import Loading from './screens/Loading'

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      loaded: false
    };

    Mainservice.loadOptions(v => this.setState({ loaded: true }));
  }
  render() {
    return (
      <View>
<<<<<<< HEAD
        {this.state.loaded ? <Main/> : <Loading/>}

=======
        {/* {this.state.loaded ? <Main/> : <Loading/>} */}
        <Main />
>>>>>>> 9be2ce710e9445166784efecf1c94a2d3de771e4
      </View>
    );
  }
}
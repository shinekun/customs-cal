import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import TaxCal from './TaxCal';
import Tobaco from './Tobaco';
import Setting from './Setting';
import Tab from '../components/Tab'

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0
    };

    this.tabScreens = [
      { name: '면세계산기', screen: <TaxCal /> },
      { name: '반입담배', screen: <Tobaco /> },
      { name: '기타등등', screen: <Setting /> }
    ];
  }
  render() {
    return (
      <View style={{ height: '100%' }}> 
      {this.tabScreens[this.state.currentTab].screen}
        <View style={styles.tabView}>
          {
            this.tabScreens.map((ele, index) => <Tab
              key={index}
              onPress={() => { this.setState({ currentTab: index }) }}
              btnTxt={ele.name}
              style={[ styles.tab,
                this.state.currentTab === index ? styles.tabFocus : null]}/>
            )
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column'
  },
  tabView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  tab: {
    flex:1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    height:80,
},
  tabFocus: {
    borderBottomWidth: 5,
    borderBottomColor: "#79ABFF",
  }
});
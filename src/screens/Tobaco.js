import React, { Component } from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import TobacoTachable from '../components/TobacoTouchable';
const COUNTRY = {
  JAPAN: {
    name: 'japan',
    flag: require('../Image/flag/japan.png'),
    detail: require('../Image/detail_report/Japan_d.jpg')
  },
  CHINA: {
    name: 'china',
    flag: require('../Image/flag/china.png'),
    detail: require('../Image/detail_report/China_d.jpg')
  },
  VIETNAM: {
    name: 'vietnam',
    flag: require('../Image/flag/vietnam.png'),
    detail: require('../Image/detail_report/Vietnam_d.jpg')
  },
  TAIWAN: {
    name: 'taiwan',
    flag: require('../Image/flag/taiwan.png'),
    detail: require('../Image/detail_report/Taiwan_d.jpg')
  },
  PHILIPPINES: {
    name: 'philippines',
    flag: require('../Image/flag/philippines.png'),
    detail: require('../Image/detail_report/Philippines_d.jpg')
  },
  HONGKONG: {
    name: 'hong-kong',
    flag: require('../Image/flag/hong-kong.png'),
    detail: require('../Image/detail_report/Hong_Kong_d.jpg')
  },
  EU: {
    name: 'european-union',
    flag: require('../Image/flag/european-union.png'),
    detail: require('../Image/detail_report/EU_1.jpg')
  },
  UK: {
    name: 'united-kingdom',
    flag: require('../Image/flag/united-kingdom.png'),
    detail: require('../Image/detail_report/United_Kingdom_d.jpg')
  },
  US: {
    name: 'united-states',
    flag: require('../Image/flag/united-states.png'),
    detail: require('../Image/detail_report/USA_d.jpg')
  },
  CANADA: {
    name: 'canada',
    flag: require('../Image/flag/canada.png'),
    detail: require('../Image/detail_report/Canada_d.jpg')
  },
  AUSTRALIA: {
    name: 'australia',
    flag: require('../Image/flag/australia.png'),
    detail: require('../Image/detail_report/Australia_d.jpg')
  },
  NEWZEALAND: {
    name: 'new-zealand',
    flag: require('../Image/flag/new-zealand.png'),
    detail: require('../Image/detail_report/New_Zealand_d.jpg')
  },
  MALAWI: {
    name: 'malawi',
    flag: require('../Image/flag/malawi.png'),
    detail: require('../Image/detail_report/Malawi_d.jpg')
  },
  RUSSIA: {
    name: 'russia',
    flag: require('../Image/flag/russia.png')
    ,
    detail: require('../Image/detail_report/Russia_d.jpg')
  }
}
export default class Tobaco extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      nowflag: 'JAPAN'
    };

  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { nowflag, modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Modal animationType="fade" transparent={false} visible={this.state.modalVisible} style={{width:'90%'}}>
          <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: '#ddd', marginHorizontal:7 }}>
            <TouchableOpacity onPress={() => { this.setModalVisible(!modalVisible); }}>
              <Image style={styles.modalImage}
                source={COUNTRY[nowflag].detail}/>
            </TouchableOpacity>
          </ScrollView>
        </Modal>

        <TobacoTachable source1={COUNTRY.JAPAN.flag} source2={COUNTRY.CHINA.flag} source3={COUNTRY.VIETNAM.flag}
          text1='일본' text2='중국' text3='베트남'
          onPress={() => { this.setModalVisible(true); this.setState({ nowflag: 'JAPAN' }) }}
          onPress2={() => { this.setModalVisible(true); this.setState({ nowflag: 'CHINA' }) }}
          onPress3={() => { this.setModalVisible(true); this.setState({ nowflag: 'VIETNAM' }) }} />
        <TobacoTachable source1={COUNTRY.TAIWAN.flag} source2={COUNTRY.PHILIPPINES.flag} source3={COUNTRY.HONGKONG.flag}
          text1='대만' text2='필리핀' text3='홍콩'
          onPress={() => { this.setModalVisible(true); this.setState({ nowflag: 'TAIWAN' }) }}
          onPress2={() => { this.setModalVisible(true); this.setState({ nowflag: 'PHILIPPINES' }) }}
          onPress3={() => { this.setModalVisible(true); this.setState({ nowflag: 'HONGKONG' }) }} />
        <TobacoTachable source1={COUNTRY.EU.flag} source2={COUNTRY.UK.flag} source3={COUNTRY.US.flag}
          text1='유럽' text2='영국' text3='미국'
          onPress={() => { this.setModalVisible(true); this.setState({ nowflag: 'EU' }) }}
          onPress2={() => { this.setModalVisible(true); this.setState({ nowflag: 'UK' }) }}
          onPress3={() => { this.setModalVisible(true); this.setState({ nowflag: 'US' }) }} />
        <TobacoTachable source1={COUNTRY.CANADA.flag} source2={COUNTRY.AUSTRALIA.flag} source3={COUNTRY.NEWZEALAND.flag}
          text1='캐나다' text2='호주' text3='뉴질랜드'
          onPress={() => { this.setModalVisible(true); this.setState({ nowflag: 'CANADA' }) }}
          onPress2={() => { this.setModalVisible(true); this.setState({ nowflag: 'AUSTRALIA' }) }}
          onPress3={() => { this.setModalVisible(true); this.setState({ nowflag: 'NEWZEALAND' }) }} />
        <TobacoTachable source1={COUNTRY.RUSSIA.flag} source2={COUNTRY.MALAWI.flag}
          text1='러시아' text2='말라위'
          onPress={() => { this.setModalVisible(true); this.setState({ nowflag: 'RUSSIA' }) }}
          onPress2={() => { this.setModalVisible(true); this.setState({ nowflag: 'MALAWI' }) }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fafafa',
    margin: 5,
    padding: 5,
  },
  modalImage: {
    alignItems: 'center',
    
  }

});
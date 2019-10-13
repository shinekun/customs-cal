import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView } from 'react-native';
import SettingAlert from '../components/SettingAlert';
import SettingDetail from '../components/SettingDetail';
import SettingHowToUse from '../components/SettingHowToUse'

export default class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      currentModal: 0
    }
  }

  setModalVisible(visible, changemodal) {
    this.setState({ modalVisible: visible, currentModal: changemodal });
  }
  render() {
    const { modalVisible, currentModal } = this.state;
    return (
      <View style={styles.container}>
        <Modal animationType='slide' transparent={false} visible={modalVisible}>
          <ScrollView style={styles.scrollviewstyle}>
            {currentModal === 0 ? <SettingDetail onPress={() => { this.setModalVisible(!modalVisible) }} /> :
              currentModal === 1 ? <SettingHowToUse onPress={() => { this.setModalVisible(!modalVisible) }} /> :
                <SettingAlert onPress={() => { this.setModalVisible(!modalVisible) }} />}
          </ScrollView>
        </Modal>
        <TouchableOpacity style={styles.touchblestyle}
          onPress={() => this.setModalVisible(!modalVisible, 0)}>
          <Text style={{ fontSize: 38 }}>세금 계산 상세 정보</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchblestyle}
          onPress={() => this.setModalVisible(!modalVisible, 1)}>
          <Text style={{ fontSize: 38 }}>사용방법</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchblestyle}
          onPress={() => this.setModalVisible(!modalVisible, 2)}>
          <Text style={{ fontSize: 38 }}>주의점</Text>
        </TouchableOpacity>
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
    margin: 10
  },
  scrollviewstyle: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f3f3f3'
  },
  touchblestyle: {
    margin: 20,
    width: '85%',
    height: '13%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderBottomColor:'#2C5364',
    borderBottomWidth:1
  }
});  
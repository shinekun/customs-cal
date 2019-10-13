import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Modal } from 'react-native';
import TaxChangeFlag from '../components/TaxChangeFlag'

const Item = Picker.Item;
const BOUGHTGOODS = [
  { label: ' ', value: 'null' },
  { label: "기타제품", value: '1_etc' },
  { label: "패션ㆍ의류", value: '1_fashion' },
  { label: "화장품ㆍ향수", value: '1_domestic' },
  { label: "카메라ㆍ디지털", value: '1_digital' },
  { label: "주류", value: '1_alchol' },
  { label: "건강보조제", value: '1_vitamin' },
  { label: "식품", value: '1_food' },
  { label: "완구", value: '1_toy' },
  { label: "운동용품", value: '1_gym' },
  { label: "모피ㆍ융단", value: '1_fur' }
];
const ETC = [
  { label: '기타제품', value: '2_etc' }
];
const FASHION = [
  { label: '신변용품', value: '2_personalGoods' },
  { label: '일반시계', value: '2_watch' },
  { label: '고급시계', value: '2_overwatch' },
  { label: '일반가방', value: '2_bag' },
  { label: '고급가방', value: '2_overbag' },
  { label: '의류', value: '2_dress' },
  { label: '귀금속 보석류', value: 'jewelry' }
];
const DOMESTIC = [
  { label: '화장품', value: '2_domestic' },
  { label: '향수', value: '2_perfum' }
];
const DIGITAL = [
  { label: '일반카메라', value: '2_camera' },
  { label: '디지털가메라', value: '2_digitalcamera' },
  { label: '캠코더', value: '2_camcoder' },
  { label: '노트북', value: '2_laptop' }
];
const ALCHOL = [
  { label: '위스키', value: '2_wisky' },
  { label: '꼬냑', value: '2_cognac' },
  { label: '포도주', value: '2_wine' },
  { label: '맥주', value: '2_beer' }
]
const VITAMIN = [
  { label: '로얄젤리', value: '2_royaljelly' },
  { label: '건강보조제', value: '2_healthsupport' },
  { label: '녹용', value: '2_deerhorn' }
];
const FOOD = [
  { label: '과자류', value: '2_snack' }
];
const TOY = [
  { label: '완구류', value: '2_toy' }
];
const GYM = [
  { label: '운동용품', value: '2_gym' },
  { label: '골프용품', value: '2-golf' },
];
const FUR = [
  { label: '모피제품', value: '2_fur' },
  { label: '고급모피', value: '2_overfur' },
  { label: '고급융단', value: '2_overcarpet' }
];
export default class TaxCal extends Component {
  constructor(props) {
    super(props);


    this.state = {
      modalVisible: false,
      stateGoods: 'null',
      stateDetailGoods: 'null',
      currency: 'USD',
      purchaseamount: 0,
      calresult: true,
      caltax: 0,
      calreporttax: 0,
      nowflag: 'US'
    };
    this.handleChangeFlagAndCurrency = this.handleChangeFlagAndCurrency.bind(this);
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  handleChangeFlagAndCurrency(f, c, visible) {
    this.setState({ nowflag: f, currency: c, modalVisible: visible });
  }
  render() {
    const { nowflag, modalVisible, calresult, caltax, currency, calreporttax, stateGoods, stateDetailGoods } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior='height' enabled>
        <View style={styles.container}>

          <Modal animationType='slide'
            transparent={false} visible={modalVisible}>
            <TaxChangeFlag visible={modalVisible}
              handleChangeFlagAndCurrency={this.handleChangeFlagAndCurrency}
            />
          </Modal>
          {/* 최상위 */}
          <View style={{ marginBottom: 20, borderBottomColor: '#ddd', borderBottomWidth: 2 }}>
            <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 2 }}
              onPress={() => { this.setModalVisible(!modalVisible); }}>
              <Image style={
                {
                  height: 24,
                  width: 32,
                }}
                source={nowflag === 'US' ? require('../Image/flag/united-states.png') :
                  nowflag === 'AU' ? require('../Image/flag/australia.png') :
                    nowflag === 'CA' ? require('../Image/flag/canada.png') :
                      nowflag === 'CH' ? require('../Image/flag/china.png') :
                        nowflag === 'EU' ? require('../Image/flag/european-union.png') :
                          nowflag === 'HK' ? require('../Image/flag/hong-kong.png') :
                            nowflag === 'JP' ? require('../Image/flag/japan.png') :
                              nowflag === 'NZ' ? require('../Image/flag/new-zealand.png') :
                                nowflag === 'KR' ? require('../Image/flag/south-korea.png') :
                                  require('../Image/flag/united-kingdom.png')} />
            </TouchableOpacity>
          </View>

          {/* 예상세액 */}
          <View style={{
            borderBottomWidth: 5,
            borderBottomColor: "#eee",
            justifyContent: 'center',
            height: '20%'
          }}>
            {calresult === true ?
              <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ calresult: false })}>
                <View style={{ flex: 0.5 }}>
                  <Text style={styles.txtstyle, { fontSize: 15 }}>예상세액</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1.5, width: '100%' }}>
                  <Text style={styles.caltxtstyle, { fontSize: 40 }}>
                    {`￦ ${caltax.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`} </Text>
                </View>
              </TouchableOpacity> :
              <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ calresult: true })}>
                <View style={{ flex: 0.5 }}>
                  <Text style={styles.txtstyle, { fontSize: 15 }}>자진신고세액</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1.5, width: '100%' }}>
                  <Text style={styles.caltxtstyle, { fontSize: 40 }}>
                    {`￦ ${calreporttax.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`} </Text>
                </View>
              </TouchableOpacity>
            }
          </View>


          {/* 피커 */}
          <View style={styles.viewstyle}>
            <Text style={styles.txtstyle}>구입물품</Text>
            <Picker
              style={styles.pickerstyle}
              selectedValue={stateGoods}
              onValueChange={(itemValue, itemIndex) => this.setState({ stateGoods: itemValue })}>
              {
                BOUGHTGOODS.map((ele, index) => {
                  return <Item key={index} label={ele.label} value={ele.value} />
                })
              }
            </Picker>
          </View>
          <View style={styles.viewstyle}>
            <Text style={styles.txtstyle}>상세물품</Text>
            <Picker
              style={styles.pickerstyle}
              selectedValue={stateDetailGoods}
              onValueChange={(itemValue, itemIndex) => this.setState({ stateDetailGoods: itemValue })}>
              {
                stateGoods === '1_etc' ? ETC.map((ele) => {
                  return <Item key={ele} label={ele.label} value={ele.value} />
                }) :
                  stateGoods === '1_fashion' ? FASHION.map((ele) => {
                    return <Item key={ele} label={ele.label} value={ele.value} />
                  }) :
                    stateGoods === '1_domestic' ? DOMESTIC.map((ele) => {
                      return <Item key={ele} label={ele.label} value={ele.value} />
                    }) :
                      stateGoods === '1_digital' ? DIGITAL.map((ele) => {
                        return <Item key={ele} label={ele.label} value={ele.value} />
                      }) :
                        stateGoods === '1_alchol' ? ALCHOL.map((ele) => {
                          return <Item key={ele} label={ele.label} value={ele.value} />
                        }) :
                          stateGoods === '1_vitamin' ? VITAMIN.map((ele) => {
                            return <Item key={ele} label={ele.label} value={ele.value} />
                          }) :
                            stateGoods === '1_food' ? FOOD.map((ele) => {
                              return <Item key={ele} label={ele.label} value={ele.value} />
                            }) :
                              stateGoods === '1_toy' ? TOY.map((ele) => {
                                return <Item key={ele} label={ele.label} value={ele.value} />
                              }) :
                                stateGoods === '1_gym' ? GYM.map((ele) => {
                                  return <Item key={ele} label={ele.label} value={ele.value} />
                                }) :
                                  stateGoods === '1_fur' ? FUR.map((ele) => {
                                    return <Item key={ele} label={ele.label} value={ele.value} />
                                  }) : null
              }
            </Picker>
          </View>


          {/* 구입금액 */}
          <View style={styles.viewstyle}>
            <Text style={styles.txtstyle}>총구입금액</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TextInput style={styles.txtInputStyle}
                onChangeText={(purchaseamount) => this.setState({ purchaseamount: purchaseamount })}
                maxLength={12}
                value={this.state.purchaseamount.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                keyboardType='numeric'
              />
              <Text style={{ alignItems: 'flex-end', fontSize: 13, marginLeft: 2 }}>
                {currency}</Text>
            </View>
          </View>

          {/* 버튼 */}
          <View style={styles.viewstyle}>
            <TouchableOpacity style={styles.buttonstyle}
              onPress={() => alert(`총구입 금액: ${this.state.purchaseamount}`)}
            >
              <Text style={{ fontSize: 40 }}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonstyle}
            onPress={}>
              <Text style={{ fontSize: 40 }}>AC</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    margin: 10
  },
  viewstyle: {
    borderBottomWidth: 5,
    borderBottomColor: "#eee",
    flexDirection: 'row',
    alignItems: 'center',
    height: '17%'
  },
  txtstyle: {
    fontSize: 20,
    flex: 1,
    color: "#909090"
  },
  pickerstyle: {
    width: 80,
    flex: 1,
    alignItems: 'center'
  },
  txtInputStyle: {
    width: 80,
    flex: 0.95,
    alignItems: 'flex-end',
    fontSize: 20,
    borderWidth: 0.3,
    textAlign: 'center'
  },
  calviewstyle: {
    borderBottomWidth: 5,
    borderBottomColor: "#eee",
    flexDirection: 'row',
    alignItems: 'center',
    height: '20%'
  },
  caltxtstyle: {
    fontSize: 20,
    flex: 0.8,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'green',
    marginLeft: 10
  },
  buttonstyle: {
    height: '80%',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 3
  }
});
import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Modal } from 'react-native';
import TaxChangeFlag from '../components/TaxChangeFlag'

const Item = Picker.Item;
const FLAG = {
  'US': require('../Image/flag/united-states.png'),
  'AU': require('../Image/flag/australia.png'),
  'CA': require('../Image/flag/canada.png'),
  'CH': require('../Image/flag/china.png'),
  'EU': require('../Image/flag/european-union.png'),
  'HK': require('../Image/flag/hong-kong.png'),
  'JP': require('../Image/flag/japan.png'),
  'NZ': require('../Image/flag/new-zealand.png'),
  'KR': require('../Image/flag/south-korea.png'),
  'UK': require('../Image/flag/united-kingdom.png')
};
const BOUGHTGOODS = [
  { label: '', value: '' },
  { label: "기타제품", value: 'ETC' },
  { label: "패션ㆍ의류", value: 'FASHION' },
  { label: "화장품ㆍ향수", value: 'DOMESTIC' },
  { label: "카메라ㆍ디지털", value: 'DIGITAL' },
  { label: "주류", value: 'ALCHOL' },
  { label: "담배", value: 'TOBACO' },
  { label: "건강보조제", value: 'VITAMIN' },
  { label: "식품", value: 'FOOD' },
  { label: "완구", value: 'TOY' },
  { label: "운동용품", value: 'GYM' },
  { label: "모피ㆍ융단", value: 'FUR' }
];
const BOUGHTDETAILGOODS = {
  "ETC": [
    { label: '기타제품', value: 'etc' },
  ],
  'FASHION': [
    { label: '신변용품', value: 'personalGoods' },
    { label: '일반시계', value: 'watch' },
    { label: '고급시계', value: 'overwatch' },
    { label: '일반가방', value: 'bag' },
    { label: '고급가방', value: 'overbag' },
    { label: '의류 및 신발', value: 'dress' },
    { label: '귀금속 보석류', value: 'jewelry' }
  ],
  'DOMESTIC': [
    { label: '화장품', value: 'domestic' },
    { label: '향수', value: 'perfum' }
  ],
  'DIGITAL': [
    { label: '일반카메라', value: 'camera' },
    { label: '디지털가메라', value: 'digitalcamera' },
    { label: '캠코더', value: 'camcoder' },
    { label: '노트북', value: 'laptop' }
  ],
  'ALCHOL': [
    { label: '위스키', value: 'wisky' },
    { label: '꼬냑', value: 'cognac' },
    { label: '포도주', value: 'wine' },
    { label: '맥주', value: 'beer' }
  ],
  'VITAMIN': [
    { label: '로얄젤리', value: 'royaljelly' },
    { label: '건강보조제', value: 'healthsupport' },
    { label: '녹용', value: 'deerhorn' }
  ],
  'FOOD': [
    { label: '과자류', value: 'snack' }
  ],
  'TOY': [
    { label: '완구류', value: 'toy' }
  ],
  'GYM': [
    { label: '운동용품', value: 'gym' },
    { label: '골프용품', value: 'golf' },
  ],
  'FUR': [
    { label: '모피제품', value: 'fur' },
    { label: '고급모피', value: 'overfur' },
    { label: '고급융단', value: 'overcarpet' }
  ],
}

export default class TaxCal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      stateGoods: '',
      stateDetailGoods: '',
      currency: 'KRW',
      purchaseamount: 0,
      calresult: true,
      caltax: 0,
      calreporttax: 0,
      nowflag: 'KR'
    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  handleChangeFlagAndCurrency = (f, c, visible) => {
    this.setState({ nowflag: f, currency: c, modalVisible: visible });
  }

  _docalreportcalculate = () => {
    this.setState({ calresult: false })
    let _reporttax = this.state.caltax * 0.7
    if (_reporttax > 150000) {
      this.setState({ calreporttax: 150000 })
    }
    else {
      this.setState({ calreporttax: _reporttax })
    }
  }

  _docalculate = (purchaseamount) => {
    let _caltax = 0;
    if (this.state.stateDetailGoods == '')
      alert('물품을 선택해주세요.')
    else
      switch (this.state.stateDetailGoods) {
        case 'etc':
          _caltax = parseInt(purchaseamount) * 0.2;
          break;
        case 'personalGoods':
          _caltax = purchaseamount * 0.2
          break;
        case 'watch': _caltax = purchaseamount * 0.2
          break;
        case 'overwatch':
          if (purchaseamount < 1852001) {
            alert('이 항목의 상품가격은 185만 2천원을 초과해야만 합니다.')
          }
          else
            _caltax = (parseInt(purchaseamount) - parseInt(1852000)) * 0.5 + parseInt(370400)
          break;
        case 'bag':
          _caltax = purchaseamount * 0.2
          break;
        case 'overbag':
          if (purchaseamount < 1852001) {
            alert('이 항목의 상품가격은 185만 2천원을 초과해야만 합니다.')
          }
          else
            _caltax = (parseInt(purchaseamount) - parseInt(1852000)) * 0.5 + parseInt(370400)
          break;
        case 'dress':
          _caltax = purchaseamount * 0.25
          break;
        case 'jewelry':
          if (purchaseamount < 4630000) {
            alert('이 항목의 상품가격은 463만 원을 초과해야만 합니다.')
          }
          else
            _caltax = (parseInt(purchaseamount) - parseInt(4630000)) * 0.5 + parseInt(926000)
          break;
        case 'domestic':
          _caltax = purchaseamount * 0.2
          break;
        case 'perfum':
          _caltax = purchaseamount * 0.2
          break;
        case 'camera':
          _caltax = purchaseamount * 0.2
          break;
        case 'digitalcamera':
          _caltax = purchaseamount * 0.1
          break;
        case 'camcoder':
          _caltax = purchaseamount * 0.2
          break;
        case 'laptop':
          _caltax = purchaseamount * 0.1
          break;
        case 'wisky':
          _caltax = purchaseamount * 1.55
          break;
        case 'cognac':
          _caltax = purchaseamount * 1.45
          break;
        case 'wine':
          _caltax = purchaseamount * 0.68
          break;
        case 'beer':
          _caltax = purchaseamount * 1.77
          break;
        case 'royaljelly':
          _caltax = purchaseamount * 0.2
          break;
        case 'healthsupport':
          _caltax = purchaseamount * 0.2
          break;
        case 'deerhorn':
          _caltax = purchaseamount * 0.32
          break;
        case 'snack':
          _caltax = purchaseamount * 0.2
          break;
        case 'toy':
          _caltax = purchaseamount * 0.2
          break;
        case 'gym':
          _caltax = purchaseamount * 0.2
          break;
        case 'golf':
          _caltax = purchaseamount * 0.2
          break;
        case 'fur':
          if (purchaseamount <= 4310000) {
            _caltax = purchaseamount * 0.3
          }
          else
            alert('이 항목의 상품가격은 431만 원 미만이어야만 합니다.')
          break;
        case 'overfur':
          if (purchaseamount < 4310000) {
            alert('이 항목의 상품가격은 431만 원을 초과해야만 합니다.')
          }
          else
            _caltax = purchaseamount * 0.4906
          break;
        case 'overcarpet':
          if (purchaseamount < 1818190) {
            alert('이 항목의 상품가격은 181만 8190원을 초과해야만 합니다.')
          }
          else
            _caltax = purchaseamount * 0.21
          break;
      }
    this.setState({ caltax: this.state.caltax + _caltax });
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
              <Image style={{ width: 32, height: 24 }}
                source={FLAG[nowflag]} />
            </TouchableOpacity>
          </View>

          {/* 예상세액 */}
          <View style={styles.iftax}>
            {calresult === true ?
              <TouchableOpacity style={{ flex: 1 }} onPress={() => this._docalreportcalculate()}>
                <View style={{ flex: 0.5 }}>
                  <Text style={styles.txtstyle, { fontSize: 15 }}>예상세액</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1.5, width: '100%', flexDirection: 'row' }}>
                  <Text style={styles.caltxtstyle, { fontSize: 30 }}>
                    {currency} </Text>
                  <Text style={styles.caltxtstyle, { fontSize: 40 }}>
                    {caltax.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
                </View>
              </TouchableOpacity> :
              <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ calresult: true })}>
                <View style={{ flex: 0.5 }}>
                  <Text style={styles.txtstyle, { fontSize: 15 }}>자진신고세액</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1.5, width: '100%' }}>
                  <Text style={styles.caltxtstyle, { fontSize: 30 }}>
                    {currency} </Text>
                  <Text style={styles.caltxtstyle, { fontSize: 40 }}>
                    {calreporttax.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
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
                stateGoods === '' ? null :
                  BOUGHTDETAILGOODS[stateGoods].map((ele, index) => {
                    return <Item key={index} label={ele.label} value={ele.value} />
                  })
              }
            </Picker>
          </View>


          {/* 구입금액 */}
          <View style={styles.viewstyle}>
            <Text style={styles.txtstyle}>총구입금액</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TextInput style={styles.txtInputStyle}
                onChangeText={(purchaseamountInput) => this.setState({ purchaseamount: purchaseamountInput })}
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
              onPress={() => this._docalculate(this.state.purchaseamount.replace(/,/g, ""))}>
              <Image style={{ height: 40, width: 40 }} source={require('../Image/calculator.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonstyle}
              onPress={() => this.setState({ caltax: 0, purchaseamount: 0 })}>
              <Image style={{ height: 40, width: 40 }} source={require('../Image/refresh.png')} />
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
  iftax: {
    borderBottomWidth: 5,
    borderBottomColor: "#eee",
    justifyContent: 'center',
    height: '20%'
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
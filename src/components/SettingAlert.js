import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class SettingAlert extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.goodsname}>{`1인당 휴대품 면세범위 
(과세대상 : 해외(국내외 면세점포함)에서 취득(구입, 기증 선물 포함)한 물품)`}</Text>
          <Text style={styles.explanation}>
          {`- 주류 1병(1리터, 400불 이하)
- 향수 60ml
- 담배 200개피
- 기타 합계 600불 이하의 물품
- *다만, 농림축산물, 한약재 등은 10만원이하로 한정하며, 품목별로 수량 또는 중량에 제한이 있습니다.`}
          </Text>

          <Text style={styles.goodsname}>면세범위 초과물품 예상세액 조회</Text>
          <Text style={styles.explanation}>
          {`- 예상세액은 총구입물품을 과세가격으로 산정(1인 기본면세범위 미화 600불 미공제)하여 계산된 금액임을 알려드립니다.
- * 입국장 면세점에서 구매한 내국물품이 있을 경우 면세범위에서 우선 공제됩니다.
- 자진신고시 관세의 30%(15만원 한도)가 감면되는 혜택을 받을 수 있으며, 신고미이행시에는 납부세액의 40% 또는 60%(반복적 신고 미이행자)의 가산세가 부과됩니다.`}
          </Text>

          <Text style={styles.goodsname}>당부드리는 말씀</Text>
          <Text style={styles.explanation}>
          {`본 어플리케이션은 관세청(https://www.customs.go.kr/kcshome/common/popup/ItemTaxCalculationPopup.do?mode=remove&seq=1) 홈페이지를 참조하여 개발하였습니다.
국가별 면세 범위는 2018년을 기준으로 작성되어 있으며, 본 어플리케이션을 사용시 불이익이 발생하여도 책임질수 없습니다:)`}
          </Text>
          </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fafafa'
  },
  goodsname: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginTop:15
  },
  explanation: {
    fontSize: 14,
    color: '#8C8C8C',
    marginBottom: 3,
    borderBottomColor: '#CACACA',
    borderBottomWidth: 1,
    paddingBottom: 2,
    marginTop:10
  }
});
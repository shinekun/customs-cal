import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class SettingHowToUse extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.goodsname}>조회방법</Text>
          <Text style={styles.explanation}>
          {`
          
- 단일세율 : 의류 등 [물품설명]에서 단일세율 적용대상이라고 명시된 물품들은 합계 미화 1000불까지 아래의 예시처럼 본래의 세율보다 낮은 단일세율(20%)을 적용받을 수 있습니다.
예)모피제품(30%) 800불 10개, 의류(25%) 150불 1개, 신발(25%) 70불 1개인 경우 : 모피제품 단일세율 1개 20% 적용, 의류 단일세율 20%적용, 신발은 본래의 세율 25%적용(단일세율이 950불 밖에 적용되지 않았지만 신발의 단가가 50불을 초과하여 합계 미화 1000불을 초과하게 되어 신발은 단일세율을 적용 받지 못한다)

- 제한물품안내 : 물품에 따라서는 면세범위에 포함되지 않거나 타법령에 의하여 반입이 제한 될 수 있습니다.
농축산물, 멸종위기에 처한 동식물관련 제품, 한약재, 성분미상 의약품, 과일류 등은 제한 사항이 많으므로 자세한 내용은 관세청 콜센터 125번으로 문의하시기 바랍니다.`}</Text>
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
  },goodsname: {
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold'
  },
  explanation: {
    fontSize: 14,
    color: '#8C8C8C',
    marginBottom: 3
  }
});
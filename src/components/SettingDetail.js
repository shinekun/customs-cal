import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class SettingDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.goodsname}>기타제품</Text>
        <Text style={styles.explanation}>
          {`다른 항목에 열거되지 않는 것, 품목과 상관없이 총과세금액 1,000달러 이하인 것
[세율]간이세율 20%
[주의]농림축수산믈, 멸종위기 동물제품, 과일류,성분불분명 의약품, 한약재 등은 이 항목에 포함되지 않는 것이 대부분이며 일부품목은 반입이 금지될 수 있습니다.`}</Text>
       
        <Text style={styles.goodsname}>신변용품</Text>
        <Text style={styles.explanation}>{`일반적으로 휴대하거나 신변에 사용되는 제품
[예시]의류계통은 제외, 선글라스,모자, 귀걸이, 목걸이, 반지, 지갑, 시계, 쇼울, 손수건, 넥타이, 스카프 등
[세율]간이세율 20%`}</Text>
        
        <Text style={styles.goodsname}>일반시계</Text>
        <Text style={styles.explanation}>{`1,852,000원 이하의 시계
[세율]간이세율 20%`}</Text>
        
        <Text style={styles.goodsname}>고급시계</Text>
        <Text style={styles.explanation}>{`	1,852,000원 초과하는 시계(개별소비세 적용 대상)
[세액] 37만 4백원 + 185만 2천원을 초과하는 금액의 50%`}</Text>
       
        <Text style={styles.goodsname}>일반가방</Text>
        <Text style={styles.explanation}>{`1,852,000원 이하의 가방 및 지갑 등
[세율]간이세율 20%`}</Text>
      
        <Text style={styles.goodsname}>고급가방</Text>
        <Text style={styles.explanation}>{`	1,852,000원 초과하는 가방 및 지갑 등(개별소비세 적용 대상)
[세액] 37만 4백원 + 185만 2천원을 초과하는 금액의 50%`}</Text>
       
        <Text style={styles.goodsname}>귀금속 보석류</Text>
        <Text style={styles.explanation}>{`4,630,000원 초과의 귀금속 및 보석류(개별소비세 적용 대상)
[세액] 92만 6천원 + 463만원을 초과하는 금액의 50%`}</Text>
      
        <Text style={styles.goodsname}>의류</Text>
        <Text style={styles.explanation}>{`대부분의 의류
[예시]여성의류 및 남성의류, 언더웨어 등, 우산, 가죽장갑, 가죽벨트 포함
[세율]간이세율 25%
[참고]모피로 만들어진 것은 모피제품 또는 고급모피로 조회`}</Text>
      
        <Text style={styles.goodsname}>신발류</Text>
        <Text style={styles.explanation}>{`일반적인 신발류
[세율]간이세율 25%`}</Text>
       
        <Text style={styles.goodsname}>화장품</Text>
        <Text style={styles.explanation}>{`향수를 제외한 대부분의 화장품
[세율]간이세율 20%`}</Text>
       
        <Text style={styles.goodsname}>향수</Text>
        <Text style={styles.explanation}>{`	모든 방향성 화장품
[예시]향수(Perfume), 오 드 퍼퓸(Eau de perfume), 오 드 뚜왈렛(Eau de toilette),
오 드 코롱(Eau de cologne) 등 향수, 코롱, 분말향, 향낭 등 모두 포함
[세율]간이세율 20%`}</Text>
       
        <Text style={styles.goodsname}>일반카메라</Text>
        <Text style={styles.explanation}>{`[세율]간이세율 20%`}</Text>
       
        <Text style={styles.goodsname}>디지털카메라</Text>
        <Text style={styles.explanation}>{`디지털카메라, 디지털캠코더 등
[세율]부가가치세율 10%`}</Text>
      
        <Text style={styles.goodsname}>캠코더</Text>
        <Text style={styles.explanation}>{`	비디오테이프레코더 등
[세율]간이세율 20%`}</Text>
       
        <Text style={styles.goodsname}>노트북</Text>
        <Text style={styles.explanation}>{`데스크탑컴퓨터(세트포함), 노트북 및 컴퓨터 주변기기
[세율]부가가치세율 10%`}</Text>
       
        <Text style={styles.goodsname}>위스키</Text>
        <Text style={styles.explanation}>{`	일반적으로 양주류 표현되는 대부분의 증류주(포도주를 증류하여 만든 꼬냑, 브랜디 제외)
[총세율]약 155%`}</Text>
      
        <Text style={styles.goodsname}>꼬냑</Text>
        <Text style={styles.explanation}>{`포도주(과실주)를 증류한 술(브랜디 포함)
[총세율]약145%`}</Text>
       
        <Text style={styles.goodsname}>포도주</Text>
        <Text style={styles.explanation}>{`포도주 및 대부분의 발표 과실주
[총세율]약68%`}</Text>
      
        <Text style={styles.goodsname}>맥주</Text>
        <Text style={styles.explanation}>{`[총세율]약177%`}</Text>
       
        <Text style={styles.goodsname}>담배</Text>
        <Text style={styles.explanation}>{`필터담배
[세율]관세등 국세 + 지방세
[예시]
1보루(2만원)의 부과 총세액 : 약 32,000원
1보루(1만원)의 부과 총세액 : 약 27,000원
--------------------------------------
궐련(필터담배) → 200개비 이하

 엽궐련(시가) →  50개비 이하

 파이프담배(잎담배) → 250g 이하

 전자담배 → 니코틴용액(1%이하, 20ml이하)

 보루로 구입 → 1보루 이하`}</Text>
       
        <Text style={styles.goodsname}>로얄젤리</Text>
        <Text style={styles.explanation}>{`생로얄제리 제품
[세율]간이세율 20%`}</Text>
        
        <Text style={styles.goodsname}>건강보조제</Text>
        <Text style={styles.explanation}>{`스쿠알렌, 상어연골제품, 비타민제 등
[세율]간이세율 20%
[주의]성분, 수량 등에 따라서 통관이 제한될 수 있습니다.`}</Text>
       
        <Text style={styles.goodsname}>과자류</Text>
        <Text style={styles.explanation}>{`초콜렛, 과자 등
[세율]간이세율 20%
[주의]치즈, 소시지 등 성분에 따라 통관이 제한될 수 있습니다.`}</Text>
       
        <Text style={styles.goodsname}>완구류</Text>
        <Text style={styles.explanation}>{`일반적인 게임기구, 장난감, 인형 등
[세율]간이세율 20%
[참고]투전기, 오락용 사행기구, 기타 슬롯머신, 핀볼머신, 룰렛머신, 카지노용기구, 골패 및 화투류 등 제외`}</Text>
      
        <Text style={styles.goodsname}>운동용품</Text>
        <Text style={styles.explanation}>{`운동기구, 운동용품, 레저용품 등
[세율]간이세율 20%
[참고]스포츠 의류, 신발 등 제외`}</Text>
      
        <Text style={styles.goodsname}>모피제품</Text>
        <Text style={styles.explanation}>{`4,310,000원 이하의 모피의류와 모피의류의 부속품 및 기타 모피제품
[세율]간이세율 30%
[주의]멸종위기에 처해있는 동물의 모피제품은 반입이 제한됩니다.`}</Text>
       
        <Text style={styles.goodsname}>고급모피</Text>
        <Text style={styles.explanation}>{`4,310,000원을 초과하는 모피제품`}</Text>
       
        <Text style={styles.goodsname}>고급융단</Text>
        <Text style={styles.explanation}>{`1장당 1,818,190원 이상인 융단
[주의]위 금액 이하라 하더라도 (물품의 면적(㎡) × 10만원)의
금액이 200만원을 초과하는 경우 세액이 달라질 수 있습니다.`}</Text>
       
        <Text style={styles.goodsname}>녹용</Text>
        <Text style={styles.explanation}>{`녹용(함유량이 전체 무게의 100분의 50이상인 것을 포함하며, 천연상태의 것은 제외)
[세율]간이세율 32%
[참고]면세범위 150g(10만원 이내), 과세통관범위 총500g
[주의]동물검역에 합격하여야 합니다.`}</Text>
       
        <Text style={styles.goodsname}>골프용품</Text>
        <Text style={styles.explanation}>{`골프채와 골프채의 부분품(헤드, 샤프트), 등
[간이세율]20%`}</Text>
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
    fontWeight: 'bold'
  },
  explanation: {
    fontSize: 14,
    color: '#8C8C8C',
    marginBottom: 3,
    borderBottomColor: '#CACACA',
    borderBottomWidth: 1,
    paddingBottom: 2
  }
});
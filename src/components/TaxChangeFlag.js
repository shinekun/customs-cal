import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

export default class TaxChangeFlag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewStyle}>
                    < TouchableOpacity style={styles.touchablestyle}
                        onPress={() => this.props.handleChangeFlagAndCurrency('KR', 'KRW', false)}>
                        <Image style={styles.touchableImagestyle}
                            source={require('../Image/flag/south-korea.png')} />
                    </TouchableOpacity >
                    < TouchableOpacity style={styles.touchablestyle}
                        onPress={() => this.props.handleChangeFlagAndCurrency('JP', 'JPY', false)}>
                        <Image style={styles.touchableImagestyle}
                            source={require('../Image/flag/japan.png')} />
                    </TouchableOpacity >
                    < TouchableOpacity style={styles.touchablestyle}
                        onPress={() => this.props.handleChangeFlagAndCurrency('CH', 'CNY', false)}>
                        <Image style={styles.touchableImagestyle}
                            source={require('../Image/flag/china.png')} />
                    </TouchableOpacity >
                </View>
                <View style={styles.viewStyle}>
                    < TouchableOpacity style={styles.touchablestyle}
                        onPress={() => this.props.handleChangeFlagAndCurrency('HK', 'HKD', false)}>
                        <Image style={styles.touchableImagestyle}
                            source={require('../Image/flag/hong-kong.png')} />
                    </TouchableOpacity >
                    < TouchableOpacity style={styles.touchablestyle}
                        onPress={() => this.props.handleChangeFlagAndCurrency('AU', 'AUD', false)}>
                        <Image style={styles.touchableImagestyle}
                            source={require('../Image/flag/australia.png')} />
                    </TouchableOpacity >
                    < TouchableOpacity style={styles.touchablestyle}
                        onPress={() => this.props.handleChangeFlagAndCurrency('NZ', 'NZD', false)}>
                        <Image style={styles.touchableImagestyle}
                            source={require('../Image/flag/new-zealand.png')} />
                    </TouchableOpacity >

                </View>
                <View style={styles.viewStyle}>
                    < TouchableOpacity style={styles.touchablestyle}
                        onPress={() => this.props.handleChangeFlagAndCurrency('EU', 'EUR', false)}>
                        <Image style={styles.touchableImagestyle}
                            source={require('../Image/flag/european-union.png')} />
                    </TouchableOpacity >
                    < TouchableOpacity style={styles.touchablestyle}
                        onPress={() => this.props.handleChangeFlagAndCurrency('CA', 'CAD', false)}>
                        <Image style={styles.touchableImagestyle}
                            source={require('../Image/flag/canada.png')} />
                    </TouchableOpacity >
                    < TouchableOpacity style={styles.touchablestyle}
                        onPress={() => this.props.handleChangeFlagAndCurrency('US', 'USD', false)}>
                        <Image style={styles.touchableImagestyle}
                            source={require('../Image/flag/united-states.png')} />
                    </TouchableOpacity >
                </View>

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
        margin: 10,
        padding: 10
    },
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: '#fafafa',
        flex: 1
    },
    touchablestyle: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 3,
        flexDirection: 'column'
    },
    touchableImagestyle: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        resizeMode: 'contain'
    },
    touchabletxt: {
        fontSize: 10,
        fontWeight: 'bold'
    }
});
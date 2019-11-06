import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class TobacoTachable extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <View style={styles.viewStyle}>
                <TouchableOpacity style={styles.touchablestyle}
                    onPress={ this.props.onPress }>
                    <Image 
                    style={styles.touchableImagestyle}
                        source={this.props.source1} />
                    <Text style={styles.touchabletxt}>{this.props.text1}</Text>
                </TouchableOpacity >

                <TouchableOpacity style={styles.touchablestyle}
                   onPress={ this.props.onPress2}>
                    <Image style={styles.touchableImagestyle}
                        source={this.props.source2} />
                    <Text style={styles.touchabletxt}>{this.props.text2}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchablestyle}
                    onPress={this.props.onPress3}>
                    <Image style={styles.touchableImagestyle}
                        source={this.props.source3} />
                    <Text style={styles.touchabletxt}>{this.props.text3}</Text>
                </TouchableOpacity>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: '#fafafa',
        flex: 1,
        margin:7
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
    },
    touchabletxt: {
        fontSize: 10,
        fontWeight: 'bold'
    }
});
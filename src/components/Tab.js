import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Tab extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity 
            style={this.props.style}
            onPress={this.props.onPress}>
                <Text style={{ fontSize: 20}}>{this.props.btnTxt}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    tab: {
        flex:1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
        height:80,
    }

});
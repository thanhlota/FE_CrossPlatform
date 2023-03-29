import React from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";

const CustomButton = ({onPress, text, type="PRIMARY"}) => {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={[styles.container, styles[`container_${type}`]]}
            activeOpacity={0.8} 
            >

            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding: 12,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: '5%',
        maxHeight: 50
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3'
    },
    container_SECONDARY: {
        backgroundColor: '#03C04A'
    },
    container_TERTIARY: {
    
    },
    container_LEFT: {
        backgroundColor: '#03C04A',
        width: '42.5%',

    },
    container_RIGHT: {
        backgroundColor: '#3B71F3',
        width: '42.5%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15
    },
    text_PRIMARY: {
        color: '#FFFFFF'
    },
    text_SECONDARY: {
        color: '#FFFFFF'
    },
    text_TERTIARY: {
        color: '#1338BE'
    },
    text_LEFT: {
        color: '#FFFFFF'
    },
    text_RIGHT: {
        color: '#FFFFFF'
    }
});

export default CustomButton;

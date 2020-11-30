import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../../utils';

const Input = ({placeholder}) => {
    return (
        <TextInput style={styles.input} placeholder={placeholder} />
    );
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: colors.default,
        borderRadius: 14,
        paddingVertical: 12,
        paddingHorizontal: 18,
        fontSize: 14,
        color: colors.default,
    }
})

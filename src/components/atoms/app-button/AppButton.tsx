import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppButtonProps } from "./types";

const AppButton = (props: AppButtonProps) => {
    return (
        <TouchableOpacity onPress={() => props.onPressButton?.()} style={[props.highLighted ? styles.container : styles.outlined, props?.style ?? {}]}>
            <Text style={[props.highLighted ? styles.buttonText : styles.outlinedText, props?.textStyle ?? {}]}>
                {props.label}
            </Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    container: {
        height: 22,
        width: 67,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    outlined: {
        height: 22,
        width: 67,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#F7F7F7'
    },
    buttonText: { fontSize: 12, fontWeight: '500', color: '#121214' },
    outlinedText: { fontSize: 12, fontWeight: '500', color: '#F7F7F7' }
});
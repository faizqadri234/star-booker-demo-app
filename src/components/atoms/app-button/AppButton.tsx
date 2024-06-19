import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppButtonProps } from "./types";

const AppButton = (props: AppButtonProps) => {
    return (
        <TouchableOpacity onPress={() => props.onPressButton?.()} style={styles.container}>
            <Text style={styles.buttonText}>
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
    buttonText: { fontSize: 12, fontWeight: '500', color: '#121214' }
});
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FilterButtonProps } from "./types";

const FilterButton = (props: FilterButtonProps) => {
    return (
        <TouchableOpacity onPress={() => props.onPressFilter()} style={[styles.container, props.isSelected ? { backgroundColor: '#F7F7F7' } : { borderWidth: 2.4, borderColor: '#313133' }]}>
            <Text style={[styles.buttonText, { color: props.isSelected ? '#121214' : '#F7F7F7' }]}>
                {props.label}
            </Text>
        </TouchableOpacity>
    )
}

export default FilterButton

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
    }
});
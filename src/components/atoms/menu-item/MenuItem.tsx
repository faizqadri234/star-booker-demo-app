import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MenuItemProps } from "./types";

const MenuItem = (props: MenuItemProps) => {
    return (
        <TouchableOpacity onPress={() => props.onPressItem()} style={props.isSelected ? styles.selectedItemContainer : styles.menuItemContainer}>
            <Text style={props.isSelected ? styles.selectedMenuItem : styles.menuItem}>
                {props.label}
            </Text>
        </TouchableOpacity>
    )
}

export default MenuItem


const styles = StyleSheet.create({
    menuItemContainer: {
        paddingVertical: 13,
    },
    menuItem: {
        fontSize: 16,
        fontWeight: '400',
        color: '#F7F7F7'
    },
    selectedMenuItem: {
        fontSize: 16,
        fontWeight: '400',
        color: '#FFF166'
    },
    selectedItemContainer: {
        paddingVertical: 13,
        borderBottomWidth: 2.5,
        borderBottomColor: '#FFF166'
    }
});
import React from "react";
import { StyleSheet, View } from "react-native";
import MenuItem from "../../atoms/menu-item/MenuItem";
import { StatsMenuBarProps } from "./types";

const StatsMenuBar = (props: StatsMenuBarProps) => {
    return (
        <View style={styles.container}>
            {['Biography', 'Media', 'Reviews'].map((item, index) => {
                return (
                    <MenuItem key={index} isSelected={index === props.selectedMenuItem} label={item} onPressItem={() => props.onPressMenuItem(index)} />
                )
            })}
        </View>
    )
}

export default StatsMenuBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderTopWidth: 0.6,
        borderBottomWidth: 0.6,
        borderColor: '#F7F7F7',
        paddingHorizontal: 28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 24
    },
    menuItemContainer: {
        paddingVertical: 13,
    },
    menuItem: {
        fontSize: 16,
        fontWeight: '400',
        color: '#F7F7F7'
    }
});
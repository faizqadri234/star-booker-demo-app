import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GenderFilterProps } from "./types";

const GenderFilter = (props: GenderFilterProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity onPress={() => props.onPressFilter('men')} style={props.filterType === 'men' ? styles.selectedFilterContainer : styles.unSelectedFilterContainer}>
                    <Text style={props.filterType === 'men' ? styles.selectedFilterText : styles.unSelectedFilterText}>
                        Men
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onPressFilter('women')} style={props.filterType === 'women' ? styles.selectedFilterContainer : styles.unSelectedFilterContainer}>
                    <Text style={props.filterType === 'women' ? styles.selectedFilterText : styles.unSelectedFilterText}>
                        Women
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GenderFilter

const styles = StyleSheet.create({
    container: { width: '100%', paddingHorizontal: 20, marginTop: 26 },
    subContainer: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#F7F7F7',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    selectedFilterContainer: {
        height: 36,
        width: '45%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedFilterText: { fontSize: 18, fontWeight: '600', color: '#121214' },
    unSelectedFilterContainer: { height: 36, width: '45%', alignItems: 'center', justifyContent: 'center' },
    unSelectedFilterText: { fontSize: 18, fontWeight: '600', color: '#F7F7F7' }
});
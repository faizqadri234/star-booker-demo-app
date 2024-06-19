import React from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const SearchBar = () => {
    return (
        <View style={styles.searchBarContainer}>
            <Image style={styles.searchIcon} source={require('../../../assets/icons/search.png')} />
            <TextInput
                placeholder="Search celebrity here ..."
                placeholderTextColor={'#F7F7F7'}
                style={styles.inputField}
            />
            <TouchableOpacity style={styles.filterIcon}>
                <Image source={require('../../../assets/icons/filter.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBarContainer: {
        width: '100%',
        backgroundColor: '#121214',
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 6,
        marginBottom: 18
    },
    searchIcon: {
        marginLeft: 16
    },
    inputField: {
        flex: 1,
        marginLeft: 8,
        color: 'white'
    },
    filterIcon: {
        height: 38,
        width: 38,
        backgroundColor: '#252525',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14
    }
});


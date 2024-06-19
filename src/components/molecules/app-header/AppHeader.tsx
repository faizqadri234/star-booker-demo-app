import React from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"
import MenuBar from "../../atoms/menu-bar/MenuBar"
import SearchBar from "../../atoms/search-bar/SearchBar"

const AppHeader = () => {
    return (
        <View>
            <SafeAreaView style={styles.safeArea} />
            <View style={styles.headerContainer}>
                <MenuBar />
                <SearchBar />
            </View>
        </View >
    )
}

export default AppHeader

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#252525',
        width: '100%',
        borderBottomRightRadius: 36,
        borderBottomLeftRadius: 36,
        paddingHorizontal: 20,
    },
    safeArea: {
        backgroundColor: '#252525',
    }
});


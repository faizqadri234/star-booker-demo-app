import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import FilterButton from "../../atoms/filter-button/FilterButton";
import { CelebrityFiltersProps } from ".";

const CelebrityFilters = (props: CelebrityFiltersProps) => {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.filters}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.filterButtonContainer}>
                            <FilterButton onPressFilter={() => props.onSelectFilter(index)} isSelected={props.selectedFilterIndex === index} label={item} />
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default CelebrityFilters

const styles = StyleSheet.create({
    container: { flexDirection: 'row', marginBottom: 20 },
    filterButtonContainer: { marginRight: 10 }
});
import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppHeader from "../../components/molecules/app-header/AppHeader";
import GenderFilter from "../../components/atoms/gender-filter/GenderFilter";
import CelebrityList from "../../components/organisms/celebrity-list/CelebrityList";
import CelebrityFilters from "../../components/molecules/celebrity-filters/CelebrityFilters";
import { HomeScreenData } from "../../mocks/BusinessHome";
import { useNavigation } from "@react-navigation/native";

const BusinessHome = () => {
    const [genderFilter, setGenderFilter] = useState<'men' | 'women'>('men')
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0)
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <AppHeader />
            <GenderFilter onPressFilter={(type) => setGenderFilter(type)} filterType={genderFilter} />
            <View style={styles.listContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={HomeScreenData}
                    renderItem={({ item, index }) => {
                        return (
                            item.listType === 'filters' ? (
                                <CelebrityFilters
                                    selectedFilterIndex={selectedFilterIndex}
                                    filters={item.data}
                                    onSelectFilter={setSelectedFilterIndex}
                                />
                            ) : (
                                <View style={{ marginTop: index === 0 ? 29 : 0 }}>
                                    <CelebrityList
                                        onPressCelebrity={() => navigation.navigate('CelebrityProfile')}
                                        celebrities={item.data}
                                        isFeatured={item.featured ?? false}
                                        heading={item.heading ?? ''}
                                    />
                                </View>
                            )
                        )
                    }}
                />
            </View>
        </View >
    )
}

export default BusinessHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121214'
    },
    listContainer: { marginLeft: 20, marginBottom: 20, flex: 1 }
});
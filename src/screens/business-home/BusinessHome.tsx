import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppHeader from "../../components/molecules/app-header/AppHeader";
import GenderFilter from "../../components/atoms/gender-filter/GenderFilter";
import AppButton from "../../components/atoms/app-button/AppButton";
import CelebrityCard from "../../components/molecules/celebrity-card/CelebrityCard";

const BusinessHome = () => {
    const [genderFilter, setGenderFilter] = useState<'men' | 'women'>('men')
    return (
        <View style={styles.container}>
            <AppHeader />
            <GenderFilter onPressFilter={(type) => setGenderFilter(type)} filterType={genderFilter} />
            <View style={{ marginLeft: 20 }}>
                <View style={{ marginTop: 29 }}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20}}>
                        <Text style={{ fontWeight: '600', fontSize: 20, color: 'white', borderRadius: 20 }}>Trending Celebrities</Text>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{ fontSize: 12, fontWeight: '400', color: '#F7F7F7' }}>
                                View all
                            </Text>
                            <Image style={{marginLeft: 5}} source={require('../../assets/icons/forward.png')} />
                        </TouchableOpacity>
                    </View>
                    <CelebrityCard />
                </View>
            </View>
        </View>
    )
}

export default BusinessHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121214'
    }
});
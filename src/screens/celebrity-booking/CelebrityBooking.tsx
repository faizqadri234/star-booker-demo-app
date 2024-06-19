import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CelebrityProfileHeader from "../../components/molecules/celebrity-profile-header/CelebrityProfileHeader";
import StatsMenuBar from "../../components/molecules/stats-menu-bar/StatsMenuBar";
import AppButton from "../../components/atoms/app-button/AppButton";
import { useNavigation } from "@react-navigation/native";

const CelebrityBooking = () => {
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0)
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <CelebrityProfileHeader onPressBackButton={() => navigation.goBack()} />
            <StatsMenuBar selectedMenuItem={selectedMenuIndex} onPressMenuItem={(index) => setSelectedMenuIndex(index)} />
            <ScrollView>
                <View style={{ paddingHorizontal: 22, marginTop: 21, flexDirection: 'column' }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#F7F7F7' }}>Biography</Text>
                    <Text style={{ fontSize: 14, fontWeight: '300', color: '#F7F7F7', lineHeight: 17, marginTop: 8 }}>
                        Sydney Bernice Sweeney is an American actress. She is known for her roles in the HBO drama series Euphoria and the first season of the anthology series The White Lotus, which earned her nominations for two Primetime Emmy Awards
                    </Text>
                </View>
                <View style={{ paddingHorizontal: 22, marginTop: 21, flexDirection: 'column', marginBottom: 100 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#F7F7F7' }}>Media</Text>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity activeOpacity={0.6}>
                                    <Image source={require('../../assets/images/Image1.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.6}>
                                    <Image style={{ marginLeft: 14 }} source={require('../../assets/images/Image2.png')} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Image style={{ marginTop: 14 }} source={require('../../assets/images/Image3.png')} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity activeOpacity={0.6}>
                            <Image style={{ marginLeft: 14 }} source={require('../../assets/images/Image4.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 20, paddingHorizontal: 22, width: '100%' }}>
                <AppButton
                    highLighted
                    label="Book Now"
                    style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: 48, borderRadius: 16 }}
                    textStyle={{ fontSize: 20, fontWeight: '500' }}
                />
            </View>
        </View >
    )
}

export default CelebrityBooking

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121214'
    },
});
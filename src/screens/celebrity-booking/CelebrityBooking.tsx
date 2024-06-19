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
                <View style={styles.bioGraphyContainer}>
                    <Text style={styles.statHeading}>Biography</Text>
                    <Text style={styles.statDescription}>
                        Sydney Bernice Sweeney is an American actress. She is known for her roles in the HBO drama series Euphoria and the first season of the anthology series The White Lotus, which earned her nominations for two Primetime Emmy Awards
                    </Text>
                </View>
                <View style={styles.mediaContainer}>
                    <Text style={styles.statHeading}>Media</Text>
                    <View style={styles.media}>
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
            <View style={styles.buttonContainer}>
                <AppButton
                    highLighted
                    label="Book Now"
                    style={styles.bookNowButton}
                    textStyle={styles.bookNowText}
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
    bioGraphyContainer: {
        paddingHorizontal: 22,
        marginTop: 21,
        flexDirection: 'column'
    },
    mediaContainer: {
        paddingHorizontal: 22,
        marginTop: 21,
        flexDirection: 'column',
        marginBottom: 100
    },
    statHeading: {
        fontSize: 18,
        fontWeight: '600',
        color: '#F7F7F7'
    },
    statDescription: {
        fontSize: 14,
        fontWeight: '300',
        color: '#F7F7F7',
        lineHeight: 17,
        marginTop: 8
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        paddingHorizontal: 22,
        width: '100%'
    },
    bookNowButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        borderRadius: 16
    },
    bookNowText: {
        fontSize: 20,
        fontWeight: '500'
    },
    media: { flexDirection: 'row', marginTop: 8 }
});
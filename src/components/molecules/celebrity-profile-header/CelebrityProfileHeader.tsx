import React from "react";
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Rating from "../../atoms/rating/Rating";
import { CelebrityProfileHeaderProps } from "./types";

const CelebrityProfileHeader = (props: CelebrityProfileHeaderProps) => {
    return (
        <View>
            <ImageBackground style={styles.coverPicture} source={require('../../../assets/images/cover.png')}>
                <SafeAreaView />
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => props.onPressBackButton()}>
                        <Image source={require('../../../assets/icons/back.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/icons/share.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ratingContainer}>
                    <Rating rating={5} />
                </View>
            </ImageBackground>
            <View style={styles.profilePictureContainer}>
                <Image style={styles.profilePicture} source={require('../../../assets/images/profile.png')} />
                <View style={styles.infoContainer}>
                    <View>
                        <Text style={styles.nameText}>
                            Sydney Sweeney
                        </Text>
                        <Text style={styles.categoryText}>
                            Category: Actor
                        </Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>
                            $250/
                        </Text>
                        <Text style={styles.unitText}>
                            hr
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CelebrityProfileHeader

const styles = StyleSheet.create({
    coverPicture: {
        width: '100%',
        height: 236
    },
    headerContainer: {
        width: '100%',
        paddingHorizontal: 23,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ratingContainer: {
        position: 'absolute',
        bottom: 15, right: 22,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePictureContainer: {
        paddingHorizontal: 23,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -50
    },
    profilePicture: {
        width: 120,
        height: 120
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 20
    },
    nameText: {
        fontSize: 19,
        fontWeight: '600',
        color: '#F7F7F7'
    },
    categoryText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#F7F7F7',
        marginTop: 4
    },
    priceContainer: {
        flexDirection: 'row',
        marginLeft: 5
    },
    priceText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFF166'
    },
    unitText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#FFF166',
        marginTop: 5
    }
});
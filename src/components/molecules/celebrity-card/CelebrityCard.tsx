import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../../atoms/app-button/AppButton";

const CelebrityCard = () => {
    return (
        <ImageBackground source={require('../../../assets/images/celeb1.png')} imageStyle={styles.bgImage} style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.nameContainer}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
                        Mena Massoud
                    </Text>
                    <Text style={styles.descriptionContainer}>
                        Social Media Star and actress work in different movies..
                    </Text>
                </View>
                <View style={styles.pricingContainer}>
                    <View style={styles.pricingTextContainer}>
                        <Text style={styles.priceText}>
                            $250/
                        </Text>
                        <Text style={styles.unitText}>
                            per-ad
                        </Text>
                    </View>
                    <AppButton label="Book now" />
                </View>
            </View>
        </ImageBackground>
    )
}

export default CelebrityCard

const styles = StyleSheet.create({
    container: { height: 225, width: 290, marginTop: 20 },
    bgImage: { borderRadius: 30 },
    subContainer: {
        width: 290,
        backgroundColor: 'rgba(18, 18, 20, 0.9)',
        position: 'absolute',
        bottom: 0,
        borderRadius: 20,
        paddingVertical: 14,
        flexDirection: 'row',
        paddingHorizontal: 18
    },
    nameContainer: { flex: 1, flexDirection: 'column' },
    descriptionContainer: { fontSize: 11, fontWeight: '400', color: 'white', paddingTop: 8, width: 170 },
    pricingContainer: { flexDirection: 'column', justifyContent: 'space-between' },
    pricingTextContainer: { flexDirection: 'row' },
    priceText: { fontSize: 16, fontWeight: '600', color: '#FFF166' },
    unitText: { fontSize: 10, fontWeight: '600', color: '#FFF166', marginTop: 6 }
});
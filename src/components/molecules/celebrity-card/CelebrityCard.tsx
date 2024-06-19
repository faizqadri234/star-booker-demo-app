import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../../atoms/app-button/AppButton";
import { CelebrityCardProps } from "./types";

const CelebrityCard = (props: CelebrityCardProps) => {
    return (
        <ImageBackground
            source={{ uri: props.profilePicture }}
            imageStyle={props.isFeatureCard ? styles.featuredBgImage : styles.bgImage}
            style={props.isFeatureCard ? styles.featuredContainer : styles.container}
        >
            <View style={[styles.subContainer, props.isFeatureCard ?
                styles.featuredSubContainer : { borderRadius: 20 }
            ]}
            >
                <View style={styles.nameContainer}>
                    <Text
                        style={[styles.nameText, props.isFeatureCard && { fontSize: 11 }]}
                    >
                        {props.name}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={[styles.descriptionContainer, props.isFeatureCard && styles.featuredDescription]}>
                        {props.description}
                    </Text>
                </View>
                <View style={styles.pricingContainer}>
                    <View style={styles.pricingTextContainer}>
                        <Text style={[styles.priceText, props.isFeatureCard && { fontSize: 9, fontWeight: '600' }]}>
                            {props.price}/
                        </Text>
                        <Text
                            style={[styles.unitText, props.isFeatureCard && { fontSize: 6, fontWeight: '600', marginTop: 2 }]}>
                            {props.unit}
                        </Text>
                    </View>
                    <AppButton
                        textStyle={props.isFeatureCard ? { fontSize: 7, fontWeight: 400 } : {}}
                        style={props.isFeatureCard ? { width: 42, height: 15 } : {}}
                        label="Book now"
                        highLighted={!props.isFeatureCard} />
                </View>
            </View>
        </ImageBackground>
    )
}

export default CelebrityCard

const styles = StyleSheet.create({
    container: { height: 225, width: 290, marginTop: 20 },
    featuredContainer: { width: 170, height: 182, marginTop: 20 },
    bgImage: { borderRadius: 30 },
    featuredBgImage: { borderRadius: 16 },
    subContainer: {
        width: 290,
        backgroundColor: 'rgba(18, 18, 20, 0.9)',
        position: 'absolute',
        bottom: 0,
        paddingVertical: 14,
        flexDirection: 'row',
        paddingHorizontal: 18
    },
    featuredSubContainer: {
        width: 170,
        height: 53,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        paddingVertical: 11,
        paddingHorizontal: 10
    },
    nameContainer: { flex: 1, flexDirection: 'column' },
    nameText: { fontSize: 18, fontWeight: '600', color: 'white' },
    descriptionContainer: { fontSize: 11, fontWeight: '400', color: 'white', paddingTop: 8, width: 170 },
    featuredDescription: { fontSize: 7, fontWeight: '400', width: 87, paddingTop: 4 },
    pricingContainer: { flexDirection: 'column', justifyContent: 'space-between' },
    pricingTextContainer: { flexDirection: 'row' },
    priceText: { fontSize: 16, fontWeight: '600', color: '#FFF166' },
    unitText: { fontSize: 10, fontWeight: '600', color: '#FFF166', marginTop: 6 }
});
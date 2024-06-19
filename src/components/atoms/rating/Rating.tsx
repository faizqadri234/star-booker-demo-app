import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { RatingProps } from "./types";

const Rating = (props: RatingProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.ratingText}>
                {props.rating}
            </Text>
            <View style={styles.ratingIcon}>
                {Array.from(Array(props.rating)).map((item, index) => {
                    return (
                        <Image key={index} source={require('../../../assets/icons/fullStar.png')} />
                    )
                })}
            </View>
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    ratingText: { fontSize: 20, fontWeight: '600', color: '#F7F7F7' },
    ratingIcon: { flexDirection: 'row' }
});
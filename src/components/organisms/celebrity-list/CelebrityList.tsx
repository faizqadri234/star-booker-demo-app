import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CelebrityCard from "../../molecules/celebrity-card/CelebrityCard";
import { CelebrityListProps } from "./types";

const CelebrityList = (props: CelebrityListProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.headingcontainer}>
                <Text style={styles.headingText}>{props.heading}</Text>
                <TouchableOpacity style={styles.viewAllContainer}>
                    <Text style={styles.viewAllText}>
                        View all
                    </Text>
                    <Image style={styles.forwardIcon} source={require('../../../assets/icons/forward.png')} />
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                data={props.celebrities}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity activeOpacity={0.6} style={styles.celebrityCardContainer} onPress={() => props.onPressCelebrity()}>
                            <CelebrityCard
                                isFeatureCard={props.isFeatured}
                                name={item.name}
                                description={item.description}
                                profilePicture={item.profilePicture}
                                unit={item.unit}
                                price={item.price}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default CelebrityList

const styles = StyleSheet.create({
    container: {
        marginBottom: 29,
    },
    headingcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    headingText: {
        fontWeight: '600',
        fontSize: 20,
        color: 'white',
        borderRadius: 20
    },
    viewAllContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewAllText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#F7F7F7'
    },
    forwardIcon: {
        marginLeft: 5
    },
    celebrityCardContainer: {
        marginRight: 20
    }
});
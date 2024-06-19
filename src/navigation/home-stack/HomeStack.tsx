import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BusinessHome from "../../screens/business-home/BusinessHome";
import CelebrityBooking from "../../screens/celebrity-booking/CelebrityBooking";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="BusinessHome"
                    component={BusinessHome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CelebrityProfile"
                    component={CelebrityBooking}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeStack
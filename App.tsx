/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
} from 'react-native';
import BusinessHome from './src/screens/business-home/BusinessHome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CelebrityBooking from './src/screens/celebrity-booking/CelebrityBooking';

const Stack = createNativeStackNavigator();


const App = () => {

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
  );
}

export default App;

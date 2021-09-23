import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";

const BottomTabNav = createBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
            <BottomTabNav.Navigator screenOptions={{
                headerShown: false
            }}>
                <BottomTabNav.Screen name="Home" component={HomeScreen} />
                <BottomTabNav.Screen name="ShoppingCart" component={ShoppingCartScreen} />
                <BottomTabNav.Screen name="Profile" component={HomeScreen} />
                <BottomTabNav.Screen name="More" component={HomeScreen} />
            </BottomTabNav.Navigator>
    );
};

export default BottomTabNavigator;

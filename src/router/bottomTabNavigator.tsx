import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import {Entypo} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
    // @ts-ignore
            <Tab.Navigator tabBarOptions={{
                showLabel: false
            }} screenOptions={{
                headerShown: false
            }}>
                <Tab.Screen name="Home" component={HomeScreen}
    // @ts-ignore
                 options={{
                     tabBarIcon: ({color}) => (
                     <Entypo name="home" size={24} color="gray" />
                     )}
                 }
                />
                <Tab.Screen name="ShoppingCart" component={ShoppingCartScreen} />
                <Tab.Screen name="Profile" component={HomeScreen} />
                <Tab.Screen name="More" component={HomeScreen} />
            </Tab.Navigator>
    );
};

export default BottomTabNavigator;

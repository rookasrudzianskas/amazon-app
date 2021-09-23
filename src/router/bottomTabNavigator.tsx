import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import {AntDesign, Entypo, Feather, Ionicons} from "@expo/vector-icons";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
    // @ts-ignore
            <Tab.Navigator tabBarOptions={{
                showLabel: false,
            }} screenOptions={{
                headerShown: false,
            }}>

                <Tab.Screen name="Home" component={HomeStack}
    // @ts-ignore
                 options={{
                     tabBarIcon: ({color}) => (
                         <AntDesign name="home" size={25} color="gray" />

                     ), }
                 }
                />
                <Tab.Screen name="ShoppingCart" component={ShoppingCartScreen}
                            options={{
                                tabBarIcon: ({color}) => (
                                    <AntDesign name="shoppingcart" size={24} color="gray" />
                                )}
                            }/>
                <Tab.Screen name="Profile" component={HomeScreen}
                            options={{
                                tabBarIcon: ({color}) => (
                                    <Ionicons name="person-outline" size={25} color="gray" />
                                )}
                            }/>
                <Tab.Screen name="More" component={HomeScreen}
                            options={{
                                tabBarIcon: ({color}) => (
                                    <Feather name="menu" size={25} color="gray" />
                                )}
                            }/>
            </Tab.Navigator>
    );
};

export default BottomTabNavigator;

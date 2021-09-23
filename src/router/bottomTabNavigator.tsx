import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import {AntDesign, Entypo, Feather, Ionicons} from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import ShoppingCartStack from "./ShoppingCartStack";

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
                <Tab.Screen name="ShoppingCart" component={ShoppingCartStack}
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

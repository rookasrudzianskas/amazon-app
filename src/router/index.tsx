import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Router = () => {

    const Root = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    //
    // function HomeScreen() {
    //     return (
    //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //             <Text style={tw`text-black bg-red-500`}>Home Screen</Text>
    //         </View>
    //     );
    // }

    return (
        <NavigationContainer>
            <Root.Navigator initialRouteName="Home"  screenOptions={{
                headerShown: false
            }}>
                <Root.Screen name="Home" component={HomeScreen} />
            </Root.Navigator>
        </NavigationContainer>
    );
};

export default Router;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";

const Router = () => {

    const Stack = createNativeStackNavigator();
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
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;

import { Auth } from 'aws-amplify';
import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import tw from "tailwind-react-native-classnames";

const ComingSoon = () => {

    const signOut = () => {
        Auth.signOut();
    }

    return (
        <View style={tw`flex items-center`}>
            <View style={tw`flex items-center justify-center mt-96 bg-gray-400 rounded-md w-60 py-2`}>
                <Text style={tw`text-3xl font-bold`}>Coming soon</Text>

            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={signOut}>
                <View style={tw`rounded-md bg-red-400  mt-10`}>
                    <Text style={tw`text-white px-3 py-2 font-bold text-xl`}>Sign out</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ComingSoon;

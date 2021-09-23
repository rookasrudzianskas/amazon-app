import React from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";

const ComingSoon = () => {
    return (
        <View style={tw`flex items-center justify-center mt-96 bg-gray-400 rounded-md w-60 py-2 ml-24`}>
            <Text style={tw`text-3xl font-bold`}>Coming soon</Text>
        </View>
    );
};

export default ComingSoon;

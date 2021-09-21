import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";

interface ButtonProps {
    text: string,
    onPress: () => {},
}

const Button = ({text, onPress}: ButtonProps) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8}>
                <View style={tw`bg-yellow-400 flex items-center py-2 rounded-md shadow-md mt-6`}>
                    <Text style={tw`text-xl`}>Add To Card</Text>
                </View>
            </TouchableOpacity>

            {/*<TouchableOpacity activeOpacity={0.8}>*/}
            {/*    <View style={tw`bg-yellow-500 flex items-center py-2 rounded-md shadow-md mt-4`}>*/}
            {/*        <Text style={tw`text-xl`}>Add To Card</Text>*/}
            {/*    </View>*/}
            {/*</TouchableOpacity>*/}
        </View>
    );
};

export default Button;

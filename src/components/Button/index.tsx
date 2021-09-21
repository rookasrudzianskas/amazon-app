import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";

interface ButtonProps {
    text: string,
    onPress: () => void,
    color: string,
    bgcolor: string,
    containerStyles?: object,
}

const Button = ({text, onPress, color, bgcolor, containerStyles}: ButtonProps) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <View style={tw`${color} flex items-center py-2 rounded-md shadow-md mt-6 border-2 shadow-md border-yellow-${bgcolor}`}>
                    <Text style={tw`text-xl`}>{text || "untitled"}</Text>
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

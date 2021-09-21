import React from 'react';
import {TouchableOpacity, View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Entypo, Ionicons} from "@expo/vector-icons";

const QuantitySelector = () => {
    return (
        <View>
            <View style={tw`flex flex-row items-center`}>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={tw`bg-gray-300 px-2 py-1 rounded-md`}>
                        <Ionicons name="ios-trash-bin" size={24} color="black" />
                    </View>
                </TouchableOpacity>

                <View style={tw``}>
                    <Text style={tw`px-3`}>1</Text>
                </View>

                <TouchableOpacity activeOpacity={0.8}>
                    <View style={tw`bg-gray-300 px-2 py-1 rounded-md`}>
                        <Entypo name="plus" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default QuantitySelector;

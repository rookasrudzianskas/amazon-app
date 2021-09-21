import React from 'react';
import {View, Text, TextInput} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Entypo, EvilIcons, Feather, Ionicons} from "@expo/vector-icons";
import product from "../../assets/data/product";

const ProductScreen = () => {
    return (
        <View style={tw`flex h-full`}>
            <View style={tw`mb-4`}>
                <View style={tw`max-w-xl bg-green-400 p-2`}>
                    <View style={tw`mt-12 flex flex-row items-center shadow-xl`}>
                        <Entypo name="chevron-thin-left" size={24} color="#37475a" style={tw`mr-2`} />
                        <View style={tw`flex flex-row items-center bg-gray-100 rounded-md`}>
                            <Feather name="search" size={22} color="#37475a" style={tw`ml-2`}/>
                            <View style={tw`bg-gray-100 px-3 py-3 rounded-md`}>
                                <TextInput placeholder="Search for something..." style={tw`text-xs text-gray-800 w-64`} >
                                </TextInput>
                            </View>
                            <Feather name="camera" size={24} color="#37475a" />
                            <Feather name="mic" size={24} color="#37475a" style={tw`ml-3 mr-2`} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={tw`px-5`}>
                <View style={tw`flex items-center flex-row justify-center`}>
                    <Text style={tw`text-lg text-gray-500 flex flex-1`}>{product?.title}</Text>
                    <EvilIcons name="share-apple" size={24} color="black" />
                </View>

                <View style={tw`flex flex-row mt-2 mb-4 items-center`}>
                    <Text style={tw`text-black text-lg`}>from </Text>
                    <Text style={tw`text-black text-xl font-bold`}>${product?.price || '1.00'}
                        {product.oldPrice && <Text style={tw`text-xs font-normal flex line-through`}>${product?.oldPrice}</Text>}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ProductScreen;

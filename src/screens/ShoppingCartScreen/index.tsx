import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Image, FlatList} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Entypo, Feather, FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import products from "../../../assets/data/cart";

import ShoppingCartItem from "../../components/ShoppingCardItem";

const ShoppingCartScreen = () => {
    // @ts-ignore
    return (
        <View>
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

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={products}
                    style={{marginBottom: 4250000000,}}

                    renderItem={({item}) => (
                        <ShoppingCartItem/>
                    )}
                />

            </View>
        </View>
    );
};

export default ShoppingCartScreen;

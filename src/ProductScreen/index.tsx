import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Entypo, EvilIcons, Feather, Ionicons} from "@expo/vector-icons";
import product from "../../assets/data/product";
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from "../components/QuantitySelector";
import Button from "../components/Button";


const ProductScreen = () => {

    const [selectedOption, setSelectedOption] = useState(product?.options ? product.options[0] : '');
    const [quantity, setQuantity] = useState(1);

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
            <ScrollView showsVerticalScrollIndicator={false}>

            <View style={tw`px-5`}>
                <View style={tw`flex items-center flex-row justify-center`}>
                    <Text style={tw`text-lg text-gray-500 flex flex-1`}>{product?.title}</Text>
                    <EvilIcons name="share-apple" size={24} color="black" />
                </View>

                <TouchableOpacity activeOpacity={0.8}>
                    <View style={tw`flex flex-row items-center bg-gray-300 py-3 rounded-md shadow-md mb-3 border-2 border-gray-400` }>
                        <View style={tw`flex flex-1 flex-col`}>
                            <Text style={tw` ml-2 mb-2`}>2 Colors:</Text>
                            <Text style={tw`font-bold ml-2`}>Black</Text>
                        </View>

                        <View>
                            <Entypo name="chevron-small-right" size={24} color="black" style={tw`mr-2`} />
                        </View>
                    </View>
                </TouchableOpacity>

                <Picker
                    selectedValue={selectedOption}
                    onValueChange={(itemValue, itemIndex) => (
                        setSelectedOption(itemValue)
                    )}
                    style={tw`-mt-20 -mb-10`}>
                    {product.options.map(option => (
                        <Picker.Item key={option} label={option} value={option} />
                    ))}
                </Picker>

                <View style={tw`flex flex-row mt-2 mb-4 items-center`}>
                    <Text style={tw`text-black text-2xl font-bold `}>${product?.price || '1.00'}
                    </Text>
                    {product.oldPrice && <Text style={tw` text-xl font-normal flex line-through ml-2`}>${product?.oldPrice}</Text>}
                </View>

                <View style={tw`mb-6`}>
                    <Text style={tw``}>{product?.description}</Text>
                </View>

                <View style={tw``}>
                    <Text style={tw`text-gray-700`}>No import Fees Deposit & $9.99 shipping to the USA <Text style={tw`text-blue-500`}>Details</Text>
                    </Text>
                </View>

                <View style={tw`mt-6`}>
                    <Text style={tw`text-black`}>Available at a lower price from <Text style={tw`text-blue-500`}>other sellers</Text> that may not offer Prime Premium Shipping.
                    </Text>
                </View>

                <View style={tw`mt-5`}>
                    <Text style={tw``}>Arrives: <Text style={tw`font-bold`}>Friday, May 6</Text></Text>
                </View>

                <View style={tw`flex flex-row items-center mt-6`}>
                    <Ionicons name="location-outline" size={24} color="black" />
                    <Text style={tw`text-blue-500 ml-1`}>Deliver to the California, USA</Text>
                </View>

                <View style={tw`mt-6`}>
                    <Text style={tw`text-xl text-red-600 font-bold`}>Only 6 left in stock - order soon.</Text>
                </View>

                {/*<TouchableOpacity activeOpacity={0.8}>*/}
                {/*    <View style={tw`flex items-center flex-row bg-gray-300 w-20 px-4 py-2 rounded-md shadow-md mt-6`}>*/}
                {/*        <Text style={tw`mr-1`}>Qty: 1</Text>*/}
                {/*        <Entypo name="chevron-down" size={16} color="black" />*/}
                {/*    </View>*/}
                {/*</TouchableOpacity>*/}

                <View style={tw`mt-6`}>
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                </View>
                {/*// @ts-ignore*/}
                <Button color={'bg-yellow-400'} text={"Add To Card"} onPress={() => {
                    console.warn("Hello");
                }}/>
                {/*// @ts-ignore*/}
                <Button color={'bg-yellow-500'} text={"Buy Now"} onPress={() => {
                    console.warn("Hello");
                }}/>

            </View>

        </ScrollView>

        </View>
    );
};

export default ProductScreen;

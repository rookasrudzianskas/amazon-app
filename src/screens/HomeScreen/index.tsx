import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TextInput, TouchableOpacity} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from './style';
import tailwind from "tailwind-rn";
import ProductItem from "../../components/ProductItem";
import products from "../../../assets/data/products";
import {Entypo, Feather, Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {Product} from "../../models";
import { DataStore } from 'aws-amplify';

const HomeScreen = () => {

    const navigation = useNavigation();
    const goBack = () => {
        // @ts-ignore
        navigation.navigate('Home');
    }

    const [products, setProducts] = useState<Product[]>([]);
        // console.log(products)

    useEffect(() => {
        const fetchSomething = async () => {
            // @ts-ignore
            setProducts(await DataStore.query(Product));
        }
        fetchSomething();
    }, []);

    // @ts-ignore
    return (

        <View style={tw`mb-36`}>
            <View style={tw`max-w-xl bg-green-400 p-2`}>
                <View style={tw`mt-12 flex flex-row items-center shadow-xl`}>
                <TouchableOpacity onPress={goBack}>
                    <Entypo name="chevron-thin-left" size={24} color="#37475a" style={tw`mr-2`} />
                </TouchableOpacity>
                    <View style={tw`flex flex-row items-center bg-gray-100 rounded-md`}>
                            <Feather name="search" size={22} color="#37475a" style={tw`ml-2`}/>
                        <View style={tw`bg-gray-100 px-3 py-3 rounded-md`}>
                            <TextInput placeholder="Search for something..." style={tw`text-xs text-gray-800 w-60`} >
                            </TextInput>
                        </View>
                        <Feather name="camera" size={24} color="#37475a" />
                        <Feather name="mic" size={24} color="#37475a" style={tw`ml-3 mr-2`} />
                    </View>
                </View>
                <View style={tw`p-2 mt-4 mb-2 flex flex-row items-center`}>
                    <Ionicons name="location-outline" size={22} color="#37475a" />
                    <Text style={tw`text-gray-700`}>Deliver to United States</Text>
                </View>
            </View>
            <View style={tw`flex flex-row mt-5`}>
                <View style={tw`flex flex-row border-b-2 border-gray-300`}>
                    <TouchableOpacity activeOpacity={0.5}>
                            <View style={tw`flex flex-row py-3 px-2 border-2 border-gray-200 rounded-md ml-3 mb-3 bg-white shadow-md`}>
                                <Text style={tw``}>Delivery</Text>
                                <Entypo name="chevron-down" size={16} color="black" />
                            </View>
                        </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                            <View style={tw`flex flex-row py-3 px-2 border-2 border-gray-200 rounded-md ml-1 mb-3 bg-white shadow-md`}>
                                <Text style={tw``}>PC Gaming Keyboard</Text>
                                <Entypo name="chevron-down" size={16} color="black" />
                            </View>
                        </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                            <View style={tw`flex flex-row py-3 px-2 border-2 border-gray-200 rounded-md ml-1 mb-3 bg-white shadow-md`}>
                                <Text style={tw``}>Brand</Text>
                                <Entypo name="chevron-down" size={16} color="black" />
                            </View>
                        </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                            <View style={tw`flex flex-row py-3 px-2 border-2 border-gray-200 rounded-md ml-1 mb-3 bg-white shadow-md`}>
                                <Text style={tw``}>Review</Text>
                                <Entypo name="chevron-down" size={16} color="black" />
                            </View>
                        </TouchableOpacity>
                </View>

            </View>
            <View style={tw`mt-4 ml-4 `}>
                <Text style={tw`font-bold text-lg`}>RESULTS</Text>
            </View>
            <View style={tw`mt-2 flex`}>
        {/*// @ts-ignore*/}
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={products}
                    // style={{marginBottom: 4250000000,}}

                        renderItem={({item}) => (
        // @ts-ignore
                        <ProductItem key={item.id} item={item}/>
                    )}
                />

            </View>


        </View>
    );
};

export default HomeScreen;

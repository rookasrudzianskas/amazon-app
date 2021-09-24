import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Image, FlatList} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Entypo, Feather, FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import products from "../../../assets/data/cart";

import CartProductItem from "../../components/CartProductItem";
import Button from "../../components/Button";
import {useNavigation} from "@react-navigation/native";
import {CartProduct, Product} from "../../models";
import { DataStore } from 'aws-amplify';

const ShoppingCartScreen = () => {

    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

    const totalPrice = products.reduce((summedPrice, product) => (
        summedPrice + product.item.price * product.quantity
    ), 0);

    const navigation = useNavigation();

    const onCheckout = () => {
        // @ts-ignore
        navigation.navigate('addressScreen');
    }


    const goBack = () => {
        // @ts-ignore
        navigation.navigate('cart');
    }

    useEffect(() => {
        const fetchCartProducts = () => {
        // @TODO query only my cart items
            DataStore.query(CartProduct).then(setCartProducts);
        }
        fetchCartProducts();
    }, []);

    useEffect(() => {
        // query all products that are used in the cart
        if(cartProducts.filter(cp => !cp.product).length === 0){
            return;
        }

        const fetchProducts = async() => {
            const products = await Promise.all(cartProducts.map(cartProduct =>
                    DataStore.query(Product, cartProduct.productID),
            ));

            setCartProducts(currentCartProducts => (cartProducts.map(cartProduct => ({
                ...cartProduct,
                product: products.find(p => p?.id === cartProduct.productID),
            }))));
        }
        fetchProducts();

        // assign products to the cart items
    }, [cartProducts]);

        console.log(products);



    // @ts-ignore
    return (
        <View>
            <View style={tw`flex h-full`}>
                <View style={tw`mb-4`}>
                    <View style={tw`max-w-xl bg-green-400 p-2`}>
                        <View style={tw`mt-12 flex flex-row items-center shadow-xl`}>
                            <TouchableOpacity onPress={goBack}>
                                <Entypo name="chevron-thin-left" size={24} color="#37475a" style={tw`mr-2`} />
                            </TouchableOpacity>
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


                <View style={tw`px-2`}>
                    <View style={tw`flex flex-row`}>
                        <Text style={tw`font-bold`}>Subtotal ({cartProducts?.length} items): </Text>
                        <Text style={tw`font-bold text-red-600`}>${totalPrice?.toFixed(2)}</Text>
                    </View>

                    <View style={tw``}>
                        <Button  bgcolor={'400'}  color={'bg-yellow-400'} text={'Proceed to checkout'} onPress={onCheckout}/>
                    </View>

                    <View style={tw`flex flex-row items-center mt-6 border-b-2 border-gray-300`}>
                        <View style={tw`mb-3 flex flex-row items-center`}>
                            <TouchableOpacity activeOpacity={0.8}>
                                <MaterialCommunityIcons style={tw`mr-3`} name="checkbox-blank-outline" size={24} color="gray" />
                            </TouchableOpacity>
                            <MaterialCommunityIcons name="gift-outline" size={24} color="gray" />
                            <Text style={tw`ml-2 text-black `}>Add a gift receipt for easy returns</Text>
                        </View>
                    </View>
                </View>


                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={cartProducts}

                    renderItem={({item}) => (
                        <CartProductItem key={item.id} cartItem={item}/>
                        // quantity selector
                    )}
                />

            </View>
        </View>
    );
};

export default ShoppingCartScreen;

// aws implementation

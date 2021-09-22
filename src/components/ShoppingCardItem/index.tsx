import React from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import Button from "../Button";
import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import styles from "../../screens/HomeScreen/style";
import product from "../../../assets/data/product";
import QuantitySelector from "../QuantitySelector";

interface ShoppingCartItem {
    item: {
        id: string,
        title: string,
        image: string,
        avgRating: number,
        ratings: number,
        price: number,
        oldPrice?: number, // this property is optional
    }
}

const ShoppingCartItem = ({item}: ShoppingCartItem) => {
    return (
        <View>

            <View style={tw`px-2`}>
                <View style={tw`flex flex-row`}>
                    <Text style={tw`font-bold`}>Subtotal (2 items): </Text>
                    <Text style={tw`font-bold text-red-600`}>$2323.5435</Text>
                </View>

                <View style={tw``}>
                    <Button  bgcolor={'400'}  color={'bg-yellow-400'} text={'Proceed to checkout'} onPress={() => console.log("ROkas")}/>
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

            <View>
                {/*    the product shit */}
                <TouchableOpacity activeOpacity={0.8}>
                    <View>
                        <View style={tw`m-2 bg-white shadow-md`}>
                            {/*    product component */}
                            <View style={tw` border-2 border-gray-200 rounded-md`}>
                                <View style={tw`flex flex-row px-2 items-center`}>
                                    <View style={tw``}>
                                        <Image style={[styles.image, tw``]} source={{uri: product?.image || ''}} />
                                    </View>

                                    <View style={tw`flex ml-5 mt-5`}>
                                        <Text numberOfLines={3}  style={[styles.textSize, tw`text-lg`]}>{product?.title || ''}</Text>

                                        <View style={tw`flex flex-row items-center mt-2`}>
                                            <Text style={tw`pl-1 bg-yellow-500 py-2 w-28 px-1 rounded-md text-white font-bold`}>#1 Best Seller</Text>
                                            <Text style={tw`ml-1 text-xs`}>in Software testing</Text>
                                        </View>

                                        <View>
                                            <View style={tw`flex flex-row mt-2 mb-4 items-center`}>
                                                <Text style={tw`text-black text-lg`}>from </Text>
                                                <Text style={tw`text-red-600 text-xl font-bold`}>${product?.price || '1.00'}
                                                </Text>
                                                {product.oldPrice && <Text style={tw`text-xs font-normal flex line-through`}> ${product?.oldPrice}</Text>}
                                            </View>

                                            <View style={tw``}>
                                                <Text style={tw`text-blue-500 font-bold text-lg`}>In Stock</Text>
                                            </View>

                                            <View style={tw`border-2 border-gray-400 py-2 px-2 rounded-md flex items-center shadow-md mt-1`}>
                                                <Text style={tw``}>Clip and Save up to $1.10</Text>
                                            </View>

                                            <View style={tw`mt-3`}>
                                                <Text style={tw`text-gray-500`}>Conditions apply</Text>
                                            </View>
                                        </View>

                                        <View style={tw`flex items-center flex-row mt-3`}>

                                            <Text>
                                                {[0, 0, 0, 0, 0].map((_, i) =>
                                                    <FontAwesome key={i} name={i < Math.floor(product?.avgRating) ? 'star' : 'star-o'} size={23} color="orange" />
                                                )}
                                            </Text>

                                            <Text style={tw`ml-2 text-gray-500`}>13.4532</Text>
                                        </View>




                                    </View>
                                </View>

                                <View style={tw``}>
                                    <View style={tw`mt-3 ml-20 flex flex-row items-center mb-3`}>
                                        <View>
                                            <QuantitySelector quantity={1} setQuantity={() => console.log("ROKAS")} />
                                        </View>
                                        <View style={tw`flex flex-row`}>
                                            <TouchableOpacity activeOpacity={0.5}>
                                                <View style={tw`flex flex-row py-2 px-2 border-2 border-gray-200 rounded-md ml-3 bg-white shadow-md`}>
                                                    <Text style={tw``}>Delete</Text>
                                                </View>
                                            </TouchableOpacity>

                                            <TouchableOpacity activeOpacity={0.5}>
                                                <View style={tw`flex flex-row py-2 px-2 border-2 border-gray-200 rounded-md ml-3 bg-white shadow-md`}>
                                                    <Text style={tw``}>Save for Later</Text>
                                                </View>
                                            </TouchableOpacity>

                                        </View>


                                    </View>

                                    <View style={tw`mb-3`}>
                                        <Text style={tw`text-lg text-blue-500 text-right mr-5`}>Compare with similar items</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>


        </View>
    );
};

export default ShoppingCartItem;

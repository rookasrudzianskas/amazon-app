import React from 'react';
import {Image, Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from "../../screens/HomeScreen/style";
import {FontAwesome} from "@expo/vector-icons";

interface ProductItemProps {
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

const ProductItem = (props: ProductItemProps) => {
    return (
        <View>
            <View style={tw`m-3`}>
                {/*    product component */}
                <View>
                    <View style={tw`flex flex-row px-2 border-2 border-gray-200 rounded-md items-center`}>
                        <View style={tw``}>
                            <Image style={[styles.image, tw``]} source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jpg'}} />
                        </View>

                        <View style={tw`flex ml-5 mt-5`}>
                            <Text numberOfLines={3}  style={[styles.textSize, tw`text-lg`]}>Clean Architecture: A Craftsman's Guide to Software  Structure and Design</Text>

                            <View style={tw`flex items-center flex-row mt-3`}>
                                <FontAwesome name="star" size={23} color="orange" />
                                <FontAwesome name="star" size={23} color="orange" style={{marginLeft: 1}} />
                                <FontAwesome name="star" size={23} color="orange" style={{marginLeft: 1}} />
                                <FontAwesome name="star" size={23} color="orange" style={{marginLeft: 1}} />
                                <FontAwesome name="star-half-empty" size={23} color="orange" style={{marginLeft: 1}} />
                                <Text style={tw`ml-2 text-gray-500`}>13.4532</Text>
                            </View>

                            <View style={tw`flex flex-row mt-2 mb-4 items-center`}>
                                <Text style={tw`text-black text-lg`}>from </Text>
                                <Text style={tw`text-black text-xl font-bold`}>$123 <Text style={tw`text-xs font-normal flex line-through`}>$323</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProductItem;

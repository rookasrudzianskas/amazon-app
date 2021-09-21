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

const ProductItem = ({item}: ProductItemProps) => {

    const rating = Math.floor(Math.random() * (5 + 10));
    if(rating <= 0) {
        return Math.floor(Math.random() * (5 + 2));
    }

    return (
        <View>
            <View style={tw`m-3`}>
                {/*    product component */}
                <View>
                    <View style={tw`flex flex-row px-2 border-2 border-gray-200 rounded-md items-center`}>
                        <View style={tw``}>
                            <Image style={[styles.image, tw``]} source={{uri: item?.image || ''}} />
                        </View>

                        <View style={tw`flex ml-5 mt-5`}>
                            <Text numberOfLines={3}  style={[styles.textSize, tw`text-lg`]}>{item?.title || ''}</Text>

                            <View style={tw`flex items-center flex-row mt-3`}>

                                {[0,0,0,0,0].map((index) => (
                                    <FontAwesome key={index} name="star" size={23} color="orange" />
                                ))}
                                <Text style={tw`ml-2 text-gray-500`}>13.4532</Text>
                            </View>

                            <View style={tw`flex flex-row mt-2 mb-4 items-center`}>
                                <Text style={tw`text-black text-lg`}>from </Text>
                                <Text style={tw`text-black text-xl font-bold`}>${item?.price || '1.00'}
                                    {item.oldPrice && <Text style={tw`text-xs font-normal flex line-through`}>${item?.oldPrice}</Text>}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProductItem;

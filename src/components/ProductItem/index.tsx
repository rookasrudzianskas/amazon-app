import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from "../../screens/HomeScreen/style";
import {FontAwesome} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

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

    function getRandomNumberBetween(min: number,max: number){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    const onPress = () => {
        // console.log("Item done")
        // @ts-ignore
        navigation.navigate('ProductDetails', {
            id: item.id
        });
    }

    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View>
                <View style={tw`m-2 bg-white shadow-md`}>
                    {/*    product component */}
                    <View>
                        <View style={tw`flex flex-row px-2 border-2 border-gray-200 rounded-md items-center`}>
                            <View style={tw``}>
                                <Image style={[styles.image, tw``]} source={{uri: item?.image || ''}} />
                            </View>

                            <View style={tw`flex ml-5 mt-5`}>
                                <Text numberOfLines={3}  style={[styles.textSize, tw`text-lg`]}>{item?.title || ''}</Text>

                                <View style={tw`flex items-center flex-row mt-3`}>

        {/*// @ts-ignore*/}
        {/*                            {Array(getRandomNumberBetween(1,6)).fill().map((_, i) => (*/}
        {/*                                <FontAwesome key={i} name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'} size={23} color="orange" />*/}
        {/*                                ))}*/}

                                    <Text>
                                        {[0, 0, 0, 0, 0].map((_, i) =>
                                             <FontAwesome key={i} name={i < Math.floor(item?.avgRating) ? 'star' : 'star-o'} size={23} color="orange" />
                                        )}
                                    </Text>

                                    <Text style={tw`ml-2 text-gray-500`}>13.4532</Text>
                                </View>

                                <View style={tw`flex flex-row mt-2 mb-4 items-center`}>
                                    <Text style={tw`text-black text-lg`}>from </Text>
                                    <Text style={tw`text-black text-xl font-bold`}>${item?.price.toFixed(2) || '1.00'}
                                        {item.oldPrice && <Text style={tw`text-xs font-normal flex line-through`}>${item?.oldPrice.toFixed(2)}</Text>}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProductItem;

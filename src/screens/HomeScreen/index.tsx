import React from 'react';
import {View, Text, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from './style';
import tailwind from "tailwind-rn";
import {FontAwesome} from "@expo/vector-icons";

const HomeScreen = () => {
    return (
        <View style={tw`m-3`}>
            {/*    product component */}
                <View>
                <View style={tw`flex flex-row mt-12 px-2 border-2 border-gray-200 rounded-md items-center`}>
                    <View style={tw``}>
                        <Image style={[styles.image, tw``]} source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jpg'}} />
                    </View>

                    <View style={tw`flex ml-5 mt-5`}>
                        <Text numberOfLines={3}  style={[styles.textSize, tw`text-lg`]}>Clean Architecture: A Craftsman's Guide to Software  Structure and Design</Text>

                        <View style={tw`flex items-center flex-row mt-3`}>
                            <FontAwesome name="star" size={23} color="orange" />
                            <FontAwesome name="star" size={23} color="orange" />
                            <FontAwesome name="star" size={23} color="orange" />
                            <FontAwesome name="star" size={23} color="orange" />
                            <FontAwesome name="star-half-empty" size={23} color="orange" />
                            <Text style={tw`ml-2 text-gray-500`}>13.4532</Text>
                        </View>

                        <View style={tw`flex flex-row mt-2 mb-4 items-center`}>
                            <Text style={tw`text-black text-lg`}>from </Text>
                            <Text style={tw`text-black text-xl font-bold`}>$123 </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HomeScreen;

import React from 'react';
import {View, Text, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from './style';
import tailwind from "tailwind-rn";

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

                        <View style={tw``}>

                        </View>

                        <View style={tw`flex flex-row mt-2 mb-2 items-center`}>
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

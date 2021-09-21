import React from 'react';
import {View, Text, Image, FlatList} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from './style';
import tailwind from "tailwind-rn";
import ProductItem from "../../components/ProductItem";
import products from "../../../assets/data/products";

const HomeScreen = () => {

    return (
        <View style={tw`mt-12`}>
    {/*// @ts-ignore*/}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={products}
                renderItem={({item}) => (
                    <ProductItem key={item.id} item={item}/>
                )} />

        </View>
    );
};

export default HomeScreen;

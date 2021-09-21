import React from 'react';
import {View, Text, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from './style';
import tailwind from "tailwind-rn";
import {FontAwesome} from "@expo/vector-icons";
import ProductItem from "../../components/ProductItem";
import products from "../../../assets/data/products";

const HomeScreen = () => {

    return (
        <View style={tw`mt-12`}>
            <ProductItem item={products[0]}/>
        </View>
    );
};

export default HomeScreen;

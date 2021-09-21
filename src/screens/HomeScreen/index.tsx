import React from 'react';
import {View, Text, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from './style';
import tailwind from "tailwind-rn";
import {FontAwesome} from "@expo/vector-icons";
import ProductItem from "../../components/ProductItem";

const HomeScreen = () => {
    return (
        <View style={tw``}>
            <ProductItem />
        </View>
    );
};

export default HomeScreen;

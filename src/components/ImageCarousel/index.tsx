import React from 'react';
import {View, Text, FlatList, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from "./style";

interface ImageCarouselProps {
    images: [string];
}

const ImageCarousel = ({images}: ImageCarouselProps) => {
    return (
        <View style={[styles.root, tw``]}>
            <FlatList data={images} horizontal renderItem={({item}) => (
                <Image source={{uri: item}} style={styles.image} />
            )} />
        </View>
    );
};

export default ImageCarousel;

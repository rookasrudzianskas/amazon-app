import React from 'react';
import {View, Text, FlatList, Image} from "react-native";

interface ImageCarouselProps {
    images: [];
}

const ImageCarousel = ({images}: ImageCarouselProps) => {
    return (
        <View>
            <FlatList data={images} renderItem={({item}) => (
                <Image source={{uri: item}} />
            )} />
        </View>
    );
};

export default ImageCarousel;

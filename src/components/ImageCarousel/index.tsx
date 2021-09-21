import React from 'react';
import {View, Text, FlatList, Image, Dimensions} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from "./style";

interface ImageCarouselProps {
    images: [string];
}

const ImageCarousel = ({images}: ImageCarouselProps) => {
    return (
        <View style={[styles.root, tw`mt-10 mb-10`]}>
            <FlatList snapToInterval={Dimensions.get('window').width} snapToAlignment={'center'} decelerationRate={'fast'}  data={images} showsHorizontalScrollIndicator={false} horizontal renderItem={({item}) => (
                <Image source={{uri: item}} style={styles.image} />
            )} />
        </View>
    );
};

export default ImageCarousel;

import React, {useState} from 'react';
import {View, Text, FlatList, Image, Dimensions} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from "./style";

interface ImageCarouselProps {
    images: [string];
}

const ImageCarousel = ({images}: ImageCarouselProps) => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <View style={[styles.root, tw`mt-10 mb-10`]}>
            <FlatList   keyExtractor={(item, index) => index.toString()} snapToInterval={Dimensions.get('window').width} snapToAlignment={'center'} decelerationRate={'fast'}  data={images} showsHorizontalScrollIndicator={false} horizontal renderItem={({item}) => (
                <Image source={{uri: item}} style={styles.image} />
            )}
            />

            <View style={tw`flex flex-row items-center justify-center mt-6`}>
                {images?.map((image, index) => (
                    <View style={[styles.dot, {
                        backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
                    }]} key={image}/>
                ))}
            </View>

        </View>
    );
};

export default ImageCarousel;

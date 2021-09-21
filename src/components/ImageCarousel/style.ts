import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain',
    },
    root: {

    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        margin: 5,
        // backgroundColor: '#c9c9c9',
    },
});

export default styles;

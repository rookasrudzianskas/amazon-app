import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain',
    },
    root: {

    }
});

export default styles;

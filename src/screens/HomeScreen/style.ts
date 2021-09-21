import {Dimensions, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').height / 10,
        resizeMode: 'contain'
    },
    textSize: {
        maxWidth: Dimensions.get('window').width / 2,
    }
});

export default styles;

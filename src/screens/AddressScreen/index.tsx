import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Alert, KeyboardAvoidingView, Platform} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Entypo, Feather, MaterialCommunityIcons} from "@expo/vector-icons";
import styles from './style';
import {Picker} from "@react-native-picker/picker";
// @ts-ignore
import countryList from "country-list";
import Button from '../../components/Button';
import {useNavigation, useRoute} from "@react-navigation/native";
import {API, Auth, DataStore, graphqlOperation} from 'aws-amplify';
import {CartProduct, Order, OrderProduct} from "../../models";
import {createPaymentIntent} from "../../graphql/mutations";
import {initPaymentSheet, presentPaymentSheet} from "@stripe/stripe-react-native";

const countries = countryList.getData();

const AddressScreen = () => {
    // console.log(countryList.getCodeList());
    const [country, setCountry] = useState(countries[0].code);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [address1, setAddress1] = useState('');
    const [city, setCity] = useState('');
    const [addressError, setAddressError] = useState('');
    const [clientSecret, setClientSecret] = useState<string | null>(null);

    const saveOrder = async () => {
        // get user details
        const userData = await Auth.currentAuthenticatedUser();
        // create a new order
        // console.log(userData.attributes.sub);

        const newOrder = await DataStore.save(
            new Order({
                userSub: userData.attributes.sub,
                fullName: fullname,
                phoneNumber: phone,
                country,
                city,
                address,
            }),
        );

        // fetch all cart items
        const cartItems = await DataStore.query(CartProduct, cp =>
            cp.userSub('eq', userData.attributes.sub),
        );

        // attach all cart items to the order
        await Promise.all(
            cartItems.map(cartItem =>
                DataStore.save(
                    new OrderProduct({
                        quantity: cartItem.quantity,
                        option: cartItem.option,
                        productID: cartItem.productID,
                        orderID: newOrder.id,
                    }),
                ),
            ),
        );

        // delete all cart items
        await Promise.all(cartItems.map(cartItem => DataStore.delete(cartItem)));

        // redirect home
        // @ts-ignore
        navigation.navigate('HomeScreen');
    };

    const onCheckout = () => {
        // if (addressError) {
        //     Alert.alert('Fix all field errors before submiting');
        //     return;
        // }
        //
        // if (!fullname) {
        //     Alert.alert('Please fill in the fullname field');
        //     return;
        // }
        //
        // if (!phone) {
        //     Alert.alert('Please fill in the phone number field');
        //     return;
        // }

        // console.warn('Success. Checkout');
        // saveOrder();
    //    handle payments

        openPaymentSheet();

    };


    const validateAddress = () => {
        if (address.length < 3) {
            setAddressError('Address is too short');
        }
    };

    const navigation = useNavigation();
    const route = useRoute();
    // @ts-ignore
    const amount = Math.floor(route.params?.totalPrice * 100 || 0);

    useEffect(() => {
        fetchPaymentIntent();
    }, []);

    const fetchPaymentIntent = async () => {
        const response = await API.graphql(graphqlOperation(createPaymentIntent, {amount}));
        // @ts-ignore
        setClientSecret(response.data.createPaymentIntent.clientSecret);
    }

    useEffect(() => {
        if(clientSecret) {
            initializePaymentSheet();
        }
    }, [clientSecret]);


    const initializePaymentSheet = async () => {
        if (!clientSecret) {
            return;
        }
        const {error} = await initPaymentSheet({
            paymentIntentClientSecret: clientSecret,
        });
        console.log('success');
        if (error) {
            // @ts-ignore
            Alert.alert(error);
        }
    }

    const openPaymentSheet = async () => {
        if (!clientSecret) {
            return;
        }
        // @ts-ignore
        const {error} = await presentPaymentSheet({clientSecret});

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            saveOrder();
            Alert.alert('Success', 'Your payment is confirmed!');
        }
    }

    const goBack = () => {
        // @ts-ignore
        navigation.navigate('cart');
    }

    return (
        <View style={tw``}>
            <View style={tw`flex h-full`}>
                <View style={tw`mb-4 z-50`}>
                    <View style={tw`max-w-xl bg-green-400 p-2`}>
                        <View style={tw`mt-12 flex flex-row items-center shadow-xl`}>
                            <TouchableOpacity onPress={goBack}>
                                <Entypo name="chevron-thin-left" size={24} color="#37475a" style={tw`mr-2`} />
                            </TouchableOpacity>
                            <View style={tw`flex items-center `}>
                                <Text style={tw`mx-16 text-blue-900 text-lg font-bold`}>Enter a shipping address</Text>
                            </View>
                        </View>
                    </View>
                    <View style={tw`bg-gray-100 p-2`}>
                        <KeyboardAvoidingView  style={{display: 'flex',}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled keyboardVerticalOffset={10}>
                            <ScrollView   showsVerticalScrollIndicator={false}>

                                <View style={tw`-mt-16`}>
                                    <Picker
                                        selectedValue={country}
                                        onValueChange={setCountry}
                                    >
                                        {countries.map((country: []) => (
            // @ts-ignore
                                            <Picker.Item label={country.name} value={country.code} key={country.name} />
                                            ))}
                                        <Picker.Item label="JavaScript" value="js" />
                                    </Picker>
                                </View>

                                <View style={tw``}>
                                    <Button  bgcolor={'400'}  color={'bg-yellow-400'}  text={'Checkout'} onPress={onCheckout}/>
                                </View>

                                        {/*------------- full name ------------------*/}

                                        <View style={tw`mt-5`}>
                                            <Text style={tw`font-bold`}>Full name (First and Last name)</Text>
                                            <View style={tw`flex bg-white flex-row items-center  border-2  mt-3 border-gray-400 rounded-md `}>
                                                <View style={tw`flex items-center py-2 justify-center flex-1`}>
                                                    <TextInput value={fullname} onChangeText={setFullname} placeholder={'Full name'} style={tw`ml-5 pb-2 w-full h-10 text-lg`} >
                                                    </TextInput>
                                                </View>
                                                    <MaterialCommunityIcons style={tw`pt-0 mr-1`} name="cancel" size={24} color="gray" />
                                            </View>
                                        </View>

                                        {/*-------------------------------*/}

                                        {/*------------- phone number ------------------*/}

                                        <View style={tw`mt-5`}>
                                            <Text style={tw`font-bold`}>Phone number</Text>
                                            <View style={tw`flex bg-white flex-row items-center  border-2  mt-3 border-gray-400 rounded-md `}>
                                                <View style={tw`flex items-center py-2 justify-center flex-1`}>
                                                    <TextInput keyboardType={'phone-pad'} value={phone} onChangeText={setPhone} placeholder={'Phone number'} style={tw`ml-5 pb-2 w-full h-10 text-lg`} >
                                                    </TextInput>
                                                </View>
                                                <MaterialCommunityIcons style={tw`pt-0 mr-1`} name="cancel" size={24} color="gray" />
                                            </View>
                                        </View>

                                        {/*-------------------------------*/}

                                        {/*------------- address ------------------*/}

                                        <View style={tw`mt-5`}>
                                            <Text style={tw`font-bold`}>Address</Text>
                                            <View style={tw`flex bg-white flex-row items-center  border-2  mt-3 border-gray-400 rounded-md `}>
                                                <View style={tw`flex items-center py-2 justify-center flex-1`}>
                                                    <TextInput
                                                        value={address}
                                                        onEndEditing={validateAddress}
                                                        onChangeText={(text) => {
                                                        setAddress(text);
                                                        setAddressError('');
                                                    }}
                                                               placeholder={'Street address or P.O. Box'} style={tw`ml-5 pb-2 w-full h-10 text-lg`} >
                                                    </TextInput>
                                                </View>

                                            </View>
                                            <View>
                                                {!!addressError && <Text style={tw`mt-1 text-red-600 mb-1`}>{addressError}</Text>}
                                            </View>

                                            <View style={tw`flex bg-white flex-row items-center  border-2  mt-1 border-gray-400 rounded-md `}>
                                                <View style={tw`flex items-center py-2 justify-center flex-1`}>
                                                    <TextInput value={address1} onChangeText={setAddress1} placeholder={'Apt., Suite, Unit, Building, (optional)'} style={tw`ml-5 pb-2 w-full h-10 text-lg`} >
                                                    </TextInput>
                                                </View>
                                            </View>
                                        </View>

                                        {/*-------------------------------*/}

                                        {/*------------- city ------------------*/}

                                        <View style={tw`mt-5`}>
                                            <Text style={tw`font-bold`}>City</Text>
                                            <View style={tw`flex bg-white flex-row items-center  border-2  mt-3 border-gray-400 rounded-md `}>
                                                <View style={tw`flex items-center py-2 justify-center flex-1`}>
                                                    <TextInput value={city} onChangeText={setCity} placeholder={'City'} style={tw`ml-5 pb-2 w-full h-10 text-lg`} >
                                                    </TextInput>
                                                </View>
                                            </View>
                                        </View>

                                        {/*-------------------------------*/}

                                        {/*------------- state ------------------*/}

                                        <View style={tw`mt-5`}>
                                            <View style={tw`flex flex-row`}>
                                                    <Text style={tw`font-bold flex flex-1`}>State</Text>
                                                <Text style={[{marginRight: 175}, tw` font-bold`]}>City</Text>
                                            </View>
                                            <View style={tw`flex flex-row mt-2 items-center`}>
                                                <View style={tw`flex flex-1 mr-1`}>
                                                    <TouchableOpacity activeOpacity={0.5}>
                                                        <View style={tw`flex flex-row py-3 px-2 border-2 border-gray-200 rounded-md mb-3 bg-white shadow-md`}>
                                                            <Text style={tw`ml-2 flex flex-1`}>Delivery</Text>
                                                            <Entypo name="chevron-down" size={16} color="black" />
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>

                                                <View style={tw`flex flex-1 ml-1`}>
                                                    <View style={tw`flex bg-white flex-row items-center  border-2 border-gray-400 rounded-md mb-2 `}>
                                                        <View style={tw`flex items-center mb-1 justify-center flex-1`}>
                                                            <TextInput value={city} onChangeText={setCity} placeholder={'City'} style={tw`ml-5 pb-1 w-full h-10 text-lg`} >
                                                            </TextInput>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                        {/*-------------------------------*/}

                                        <View style={tw`flex flex-row items-center`}>
                                            <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="gray" />
                                            <Text style={tw`ml-2`}>Make this my default address</Text>
                                        </View>

                                        <View style={tw`flex flex-row items-center bg-white py-3 rounded-md mt-3 border-2 border-gray-400`}>
                                            <View style={tw`flex flex-1`}>
                                                <Text style={tw`font-bold text-lg ml-2`}>Delivery Instructions(optional)</Text>
                                                <Text style={tw`font-bold ml-2`}>Notes, preferences, access codes and more.</Text>
                                            </View>
                                            <View style={tw``}>
                                                <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />
                                            </View>
                                        </View>



                                    </ScrollView>
                            </KeyboardAvoidingView>

                    </View>
                </View>
            </View>

        </View>
    );
};

export default AddressScreen;

// done

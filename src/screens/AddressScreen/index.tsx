import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Entypo, Feather, MaterialCommunityIcons} from "@expo/vector-icons";
import styles from './style';
import {Picker} from "@react-native-picker/picker";
// @ts-ignore
import countryList from "country-list";

const countries = countryList.getData();

const AddressScreen = () => {
    // console.log(countryList.getCodeList());
    const [country, setCountry] = useState(countries[0].code);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <View style={tw``}>
            <View style={tw`flex h-full`}>
                <View style={tw`mb-4 z-50`}>
                    <View style={tw`max-w-xl bg-green-400 p-2`}>
                        <View style={tw`mt-12 flex flex-row items-center shadow-xl`}>
                            <Entypo name="chevron-thin-left" size={24} color="#37475a" style={tw`mr-2`} />
                            <View style={tw`flex items-center `}>
                                <Text style={tw`mx-16 text-blue-900 text-lg font-bold`}>Enter a shipping address</Text>
                            </View>
                        </View>
                    </View>
                    <View style={tw`bg-gray-100 p-2`}>
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

                        <ScrollView>
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
                                        <TextInput value={phone} onChangeText={setPhone} placeholder={'Street address or P.O. Box'} style={tw`ml-5 pb-2 w-full h-10 text-lg`} >
                                        </TextInput>
                                    </View>
                                </View>
                                <View style={tw`flex bg-white flex-row items-center  border-2  mt-1 border-gray-400 rounded-md `}>
                                    <View style={tw`flex items-center py-2 justify-center flex-1`}>
                                        <TextInput value={phone} onChangeText={setPhone} placeholder={'Apt., Suite, Unit, Building, (optional)'} style={tw`ml-5 pb-2 w-full h-10 text-lg`} >
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
                                        <TextInput value={phone} onChangeText={setPhone} placeholder={'City'} style={tw`ml-5 pb-2 w-full h-10 text-lg`} >
                                        </TextInput>
                                    </View>
                                </View>
                            </View>

                            {/*-------------------------------*/}

                        </ScrollView>

                    </View>
                </View>
            </View>



            {/*<View style={tw`bg-gray-100 px-3 py-3 rounded-md`}>*/}
            {/*    <TextInput placeholder="Search for something..." style={tw`text-xs text-gray-800 w-64`} >*/}
            {/*    </TextInput>*/}
            {/*</View>*/}
        </View>
    );
};

export default AddressScreen;

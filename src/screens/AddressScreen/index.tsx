import React from 'react';
import {View, Text, TextInput} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Entypo, Feather} from "@expo/vector-icons";
import styles from './style';
import {Picker} from "@react-native-picker/picker";
// @ts-ignore
import countryList from "country-list";

const countries = countryList.getCodeList();

const AddressScreen = () => {
    // console.log(countryList.getCodeList());
    return (
        <View style={tw``}>
            <View style={tw`flex h-full`}>
                <View style={tw`mb-4`}>
                    <View style={tw`max-w-xl bg-green-400 p-2`}>
                        <View style={tw`mt-12 flex flex-row items-center shadow-xl`}>
                            <Entypo name="chevron-thin-left" size={24} color="#37475a" style={tw`mr-2`} />
                            <View style={tw`flex items-center `}>
                                <Text style={tw`mx-16 text-blue-900 text-lg font-bold`}>Enter a shipping address</Text>
                            </View>
                        </View>
                    </View>
                    <View style={tw`bg-gray-100`}>
                        <View style={tw`-mt-16`}>
                            <Picker>
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                        </View>
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

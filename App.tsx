import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import tw from "tailwind-react-native-classnames";
import tailwind from "tailwind-rn";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={tailwind('h-full')}>
        <View style={tailwind('pt-12 items-center')}>
          <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
            <Text style={tailwind('text-blue-800 font-semibold')}>
              Hello, let's build an amazon!
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

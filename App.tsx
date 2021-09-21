import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import tw from "tailwind-react-native-classnames";
import tailwind from "tailwind-rn";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={tw`bg-gray-100`}>
        <HomeScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

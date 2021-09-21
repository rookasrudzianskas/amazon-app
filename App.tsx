import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from "tailwind-react-native-classnames";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={tw`text-xl font-bold`}>Amazon 🔥!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

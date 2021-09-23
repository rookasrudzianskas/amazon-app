import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Router from "./src/router";


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/*<View style={tw`bg-gray-100`}>*/}
        <Router />
      {/*</View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
      flex: 1,
  },
});

// backend

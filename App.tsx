import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Router from "./src/router";

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import {StripeProvider} from '@stripe/stripe-react-native';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});


const App = () => {
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

export default withAuthenticator(App);

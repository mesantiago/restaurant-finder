import { View } from 'react-native';
import React from 'react';
import Header from './app/components/Header';
import HomeScreen from './app/screens/HomeScreen';

export default function App () {
  return (
    <View>
      <Header />
      <HomeScreen />
    </View>
  );
}
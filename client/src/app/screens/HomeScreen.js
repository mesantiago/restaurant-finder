import React from 'react';
import { StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';

function HomeScreen () {
  return (
    <Screen>
      <View style={styles.home}></View>
    </Screen>
  );
}

HomeScreen.propTypes = {};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    alignItems: 'center'
  }
});
import { SafeAreaView, StyleSheet, View } from 'react-native';
import * as PropTypes from 'prop-types';

import Footer from './Footer';

export default function Screen ({ children }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.body}>{children}</View>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

Screen.propTypes = {
  children: PropTypes.any
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 13,
    fontFamily:
      '"Lucida Sans Unicode","Lucida Grande",Arial,Helvetica,clean,sans-serif'
  },
  body: {
    minHeight: '30%'
  }
});
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
  Text
} from 'react-native';
import * as PropTypes from 'prop-types';

import colors from '../config/colors';

export default function Header ({ currentPage }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => Linking.openURL('/')}>
        <Text style={styles.logo}> Restaurant Finder </Text>
      </TouchableOpacity>
      {/* <View style={styles.buttonsContainer}></View> */}
    </View>
  );
}

Header.propTypes = {
  currentPage: PropTypes.object
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  logo: {
    fontSize: '15pt',
    color: 'white',
    fontWeight: "bold"
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    right: 10
  }
});
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking
} from 'react-native';

import colors from '../config/colors';

export default function Footer () {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://github.com/mesantiago/restaurant-finder')}
      >
        <Text> Restaurant finder 2025. All rights reserved.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingVertical: 40,
    marginTop: 40
  }
});
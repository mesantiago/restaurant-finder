import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import * as PropTypes from 'prop-types';

import colors from '../config/colors';
import React from 'react';

export default function SearchBox ({ onSubmit }) {
  const [userInput, changeContent] = React.useState('');
  const [errorMessage, changeMessage] = React.useState('');

  const onValidate = () => {
    changeMessage('');
    if (!userInput) {
      return changeMessage('Type something, anything! (We wont judge)');
    }
    onSubmit(userInput);
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.messageContainer}>
          <Text style={styles.error}>{errorMessage}</Text>
        </View>
        <TextInput
          style={styles.input}
          value={userInput}
          onChangeText={changeContent}
          onSubmitEditing={onValidate}
          placeholder="Hungry? Lets find food!"
        />
        <Button
          title="Search"
          style={styles.button}
          color={colors.primaryButton}
          onPress={onValidate}
        ></Button>
      </View>
    </View>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func
};

const styles = StyleSheet.create({
  datetime: {
    textAlign: 'right',
    fontSize: 8,
    color: colors.footerText
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '500px',
    maxWidth: '100%'
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 10
  },
  error: {
    color: colors.error
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    maxWidth: 400
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.mutedText,
    padding: 10
  }
});
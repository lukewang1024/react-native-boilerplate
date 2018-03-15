import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const InputWithButton = ({ onPress, buttonText, editable }) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableHighlight>
    <View style={styles.border} />
    <TextInput editable={editable} style={styles.input} />
  </View>
);

InputWithButton.defaultProps = {
  onPress: () => {},
  buttonText: '',
  editable: true,
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;

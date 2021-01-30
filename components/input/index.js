import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Input.styles';

const CustomInput = (props) => {
  return (
    <View>
      <TextInput
        style={styles.inputContainer}
        value={props.state}
        onChange={(text) => props.setState(text)}
        placeholder={props.placeholder}
      />
    </View>
  );
};

export default CustomInput;

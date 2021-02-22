import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.styles';

const FormField = (props) => {
  const [showLine, setShowLine] = useState(false);

  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        style={showLine ? styles.input_container_focous : styles.inputContainer}
        onChange={(event) =>
          props.handleFormValueChange(props.formKey, event.nativeEvent.text)
        }
        onFocus={() => setShowLine(true)}
        onBlur={() => setShowLine(false)}
        {...props.textInputProps}
      />
    </View>
  );
};

export default FormField;

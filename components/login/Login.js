import React, {useState} from 'react';
import {
  Platform,
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Logo from '../logo';
import AuthAPI from '../../src/api/Auth';
import styles from './Login.style';


const Login = (props) => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  function loginUser() {
    AuthAPI.login(email, password)
      .then((response) => {
        props.getUser();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flexContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}>
        <Logo />

        <TextInput
          style={styles.inputContainer}
          placeholder="email"
          autoCapitalize="none"
          placeholderTextColor="#A0A3BD"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(mess) => setEmail(mess)}
        />

        <TextInput
          style={styles.inputContainer}
          placeholder="senha"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(mess) => setPassword(mess)}
        />
        <View style={styles.wrapperButton}>
          <TouchableOpacity style={styles.sendButton} onPress={loginUser}>
            <Text style={styles.sendButtonText}>Logar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

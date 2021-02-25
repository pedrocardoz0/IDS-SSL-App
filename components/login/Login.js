import React from 'react';
import {
  Platform,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Logo from '../logo';
import FormField from '../input/Input';
import {formData} from '../input/formdata';

import AuthAPI from '../../src/api/Auth';
import styles from './Login.style';

const Login = (props) => {
  const [formValues, handleFormValueChange, setFormValues] = formData({
    email: '',
    password: '',
  });

  function loginUser() {
    AuthAPI.login(formValues.email, formValues.password)
      .then((response) => {
        props.getUser();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView
          style={styles.flexContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}>
          <Logo />

          <View style={styles.input_container}>
            <View style={styles.input_container_wrapper_text}>
              <TouchableOpacity>
                <Text style={styles.input_container_text}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={[styles.input_container_text, {opacity: 0.4}]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.input_container_inner}>
              <Text style={styles.wellcome_text}>Bem vindo de volta</Text>
              <Text style={styles.wellcome_text_sub}>
                entre com a sua conta
              </Text>

              <FormField
                formKey="email"
                placeholder="email"
                textInputProps={{
                  keyboardType: 'email-address',
                  autoCapitalize: 'none',
                  value: formValues.email,
                }}
                handleFormValueChange={handleFormValueChange}
              />

              <FormField
                formKey="password"
                placeholder="senha"
                textInputProps={{
                  secureTextEntry: true,
                  autoCapitalize: 'none',
                  value: formValues.password,
                }}
                handleFormValueChange={handleFormValueChange}
              />

              <View style={styles.wrapperButton}>
                <TouchableOpacity style={styles.sendButton} onPress={loginUser}>
                  <Text style={styles.sendButtonText}>Logar</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.recover_text}>
                Esqueçeu a senha?{' '}
                <Text style={styles.recover_text_green}>Recupere aqui</Text>
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput, Button} from 'react-native';
import AuthAPI from '../../src/api/Auth';

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
    <SafeAreaView style={{flex: 1}}>
      <Text>Email</Text>
      <TextInput onChangeText={(mess) => setEmail(mess)} />

      <Text>Password</Text>
      <TextInput onChangeText={(mess) => setPassword(mess)} />

      <Button title="Send" onPress={loginUser} />
    </SafeAreaView>
  );
};

export default Login;

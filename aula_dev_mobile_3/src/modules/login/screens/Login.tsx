import React from 'react';
import styles from '../styles/login.style';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import {useLogin} from '../hooks/useLogin';
import {useNavigation} from '@react-navigation/native';
import axios, {HttpStatusCode} from 'axios';

const Login = () => {
  const [text, onChangeText] = React.useState('');
  const navigation = useNavigation();
  const {
    email,
    password,
    handleOnPress,
    authLogin,
    handleEmailInput,
    handlePasswordInput,
  } = useLogin();

  async function changeScreen() {
    const login = await authLogin();

    if (login[1] >= 200 && login[1] <= 299) {
      console.log(login);
      navigation.navigate('Home');
    } else {
      console.log('invalid email or password');
    }
    // console.log(login);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>LOGIN</Text>
      <TextInput
        value={email}
        // value="root@root.com"
        onChange={handleEmailInput}
        style={styles.formstyle}
        placeholder="Email"
        onChangeText={onChangeText}></TextInput>
      <TextInput
        value={password}
        // value="abc"
        onChange={handlePasswordInput}
        style={styles.formstyle}
        secureTextEntry={true}
        placeholder="Senha"
        onChangeText={onChangeText}></TextInput>
      <TouchableOpacity style={styles.buttonstyle} onPress={changeScreen}>
        <Text style={styles.buttontext}>CONFIRMAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

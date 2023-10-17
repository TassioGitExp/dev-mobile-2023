import axios from 'axios';
import {useState} from 'react';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';

export const useLogin = async () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnPress = () => {
    console.log(`Email: ${email}\nPassword: ${password}`);
  };

  const handleEmailInput = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setEmail(event.nativeEvent.text);
  };

  const handlePasswordInput = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setPassword(event.nativeEvent.text);
  };

  const resultLogin = await axios.post('http://192.168.137.49:8080/auth', {
    email,
    password,
  }).then( res => {
    console.log(res.data);
  }).catch((err)=>{console.log(err)})

  return {
    email,
    password,
    handleOnPress,
    handleEmailInput,
    handlePasswordInput,
    resultLogin,
  };
};

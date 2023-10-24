import axios from 'axios';
import {useState} from 'react';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authLogin = async () => {
    try {
      const {data, status} = await axios.post(
        'http://192.168.10.162:8080/auth',
        {
          email: {email}.email,
          password: {password}.password,
        },
      );

      // console.log(JSON.stringify(data));
      return [data.accessToken, status];
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  };

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

  return {
    email,
    password,
    handleOnPress,
    handleEmailInput,
    handlePasswordInput,
    authLogin,
  };
};

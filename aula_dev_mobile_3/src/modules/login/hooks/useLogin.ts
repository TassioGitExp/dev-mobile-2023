import {useState} from 'react';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';

export const useLogin = () => {
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

  return {
    email,
    password,
    handleOnPress,
    handleEmailInput,
    handlePasswordInput,
  };
};

import axios from 'axios';
import {useState} from 'react';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useAppDispatch} from '../../../store/hooks/useAppDispatch';
import {useAppSelector} from '../../../store/hooks/useAppSelector';
import {userSlice} from '../../../store/userReducer/userSlice';
import {setUserAction} from '../../../store/userReducer/userAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type UserDetails = {
  id: number;
  email: string;
  name: string;
  cpf: string;
  phone: string;
};

export type AuthDetails = {
  accessToken: string;
  user: UserDetails;
};

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user} = useAppSelector(store => store.user);
  const dispatch = useAppDispatch();

  //console.log(user);

  const authLogin = async () => {
    try {
      await axios
        .post('http://192.168.10.118:8080/auth', {
          email: {email}.email,
          password: {password}.password,
        })
        .then(result => {
          AsyncStorage.setItem('accessToken', result.data.accessToken);
          dispatch(setUserAction(result.data));
        });

      // console.log(JSON.stringify(user));

      const res = Object.assign(user);
      return res;
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

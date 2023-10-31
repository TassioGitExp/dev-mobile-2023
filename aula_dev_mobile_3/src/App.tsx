import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styled from 'styled-components/native';
import Login from './modules/login';
import {Provider} from 'react-redux';
import {store} from './store';
import {Routes} from './routes';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './modules/home';
import Product from './modules/product';
import Cart from './modules/cart';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

//TODO: Salvar token em async storage
//TODO: Usar token para fazer login
//TODO: Verificar se token é valido

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;

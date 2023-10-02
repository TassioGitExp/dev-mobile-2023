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
import {Routes} from './routes';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './modules/home';
import Product from './modules/product';
import Cart from './modules/cart';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return <Routes />;
};

export default App;

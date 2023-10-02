import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './stack.routes';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../modules/login';
import Home from '../modules/home';
import Product from '../modules/product';
import Cart from '../modules/cart';
import {StackNavigator} from './stack.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modules/login';
import Home from '../modules/home';
import React from 'react';
import Product from '../modules/product';
import Cart from '../modules/cart';

const {Screen, Navigator, Group} = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Navigator>
      <Group screenOptions={{headerTintColor: '#1f1d1d'}}>
        <Screen name="Login" component={Login}></Screen>
        <Screen name="Home" component={Home}></Screen>
        <Screen name="Product" component={Product}></Screen>
        <Screen name="Cart" component={Cart}></Screen>
      </Group>
    </Navigator>
  );
}

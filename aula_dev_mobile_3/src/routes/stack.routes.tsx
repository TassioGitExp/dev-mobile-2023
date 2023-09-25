import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modules/login';
import Home from '../modules/home';
import React from 'react';
import Product from '../modules/product';

const {Screen, Navigator, Group} = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Navigator>
      <Group screenOptions={{headerTintColor: '#1f1d1d'}}>
        <Screen name="Login" component={Login}></Screen>
        <Screen name="Home" component={Home}></Screen>
        <Screen name="Product" component={Product}></Screen>
      </Group>
    </Navigator>
  );
}

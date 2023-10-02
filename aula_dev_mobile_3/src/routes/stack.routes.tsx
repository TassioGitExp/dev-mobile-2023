import {createStackNavigator} from '@react-navigation/stack';
import Login from '../modules/login';
import Home from '../modules/home';
import React from 'react';
import Product from '../modules/product';
import Cart from '../modules/cart';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerTintColor: '#1f1d1d'}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

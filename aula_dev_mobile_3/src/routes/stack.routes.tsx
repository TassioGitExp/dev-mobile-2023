import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modules/login';
import Home from '../modules/home';
import React from 'react';

const {Screen, Navigator, Group} = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Navigator>
      <Group screenOptions={{headerTintColor: 'blue'}}>
        <Screen name="Login" component={Login}></Screen>
        <Screen name="Home" component={Home}></Screen>
      </Group>
    </Navigator>
  );
}

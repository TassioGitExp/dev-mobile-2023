import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './stack.routes';
import React from 'react';

export function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}

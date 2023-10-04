import {createStackNavigator} from '@react-navigation/stack';
import Login from '../modules/login';
import Home from '../modules/home';
import React from 'react';
import Product from '../modules/product';
import Cart from '../modules/cart';
import Profile from '../modules/profile';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

export function StackNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerTintColor: '#1f1d1d'}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => (
              <TouchableOpacity
                style={styles.profileButton}
                onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.profileButtonText}>Profile</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerRight: () => (
              <TouchableOpacity
                style={styles.profileButton}
                onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.profileButtonText}>Profile</Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  profileButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '3%',
    maxHeight: '65%',
    width: 'auto',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#1f1d1d',
  },
  profileButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

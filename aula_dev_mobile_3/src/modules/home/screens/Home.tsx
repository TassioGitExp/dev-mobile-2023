import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card} from '../../../shared/components/card';

const Home = () => {
  const navigation = useNavigation();
  function changeScreen() {
    navigation.navigate('Product');
  }

  return (
    <View style={{flex: 1}}>
      <Card onPress={changeScreen}>Home Screen</Card>
    </View>
  );
};

export default Home;

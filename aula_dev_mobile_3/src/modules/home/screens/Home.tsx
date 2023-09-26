import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card} from '../../../shared/components/card';
import {CartButton, styles} from '../styles/home.style';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = () => {
  const navigation = useNavigation();
  function navigateToProduct() {
    navigation.navigate('Product');
  }
  function navigateToCart() {
    navigation.navigate('Cart');
  }

  return (
    <View style={{flex: 1}}>
      <Card onPress={navigateToProduct}>Home Screen</Card>
      <CartButton onPress={navigateToCart}>
        <Icon
          name={'shopping-cart'}
          size={36}
          style={styles.floatingCartBtnIcon}
          light></Icon>
      </CartButton>
    </View>
  );
};

export default Home;

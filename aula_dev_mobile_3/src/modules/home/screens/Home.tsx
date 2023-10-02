import React, {useState} from 'react';
import {FlatList, ImageProps, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Card} from '../../../shared/components/card';
import {CartButton, styles} from '../styles/home.style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NavigationAction, NavigationComponent} from 'react-navigation';

interface Product {
  id?: string;
  name: string;
  description: string;
  image: string;
  price: string;
  promo: string;
}

const imageSrc = require('../../../assets/');

const images = {
  mesa1: require('../../../assets/mesa.jpeg'),
  // mesa1: require('../../../assets/mesa.jpeg'),
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Produto 1',
      description: 'desc. 1',
      image: images.mesa1,
      price: '20,39',
      promo: '10,40',
    },
    {
      id: '2',
      name: 'Produto 2',
      description: 'desc. 2',
      image: images.mesa1,
      price: '26,70',
      promo: '14,99',
    },
  ]);

  const navigation = useNavigation();
  function navigateToProduct() {
    navigation.navigate('Product');
  }
  function navigateToCart() {
    navigation.navigate('Cart');
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'transparent',
          margin: 2,
        }}
        data={products}
        renderItem={({item}) => (
          <Card
            onPress={() => navigation.navigate('Product', item)}
            title={item.name}
            price={item.price}
            offer={item.promo}
            image={item.image}>
            Test
          </Card>
        )}
      />

      {/* <Card onPress={navigateToProduct}>Home Screen</Card> */}
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

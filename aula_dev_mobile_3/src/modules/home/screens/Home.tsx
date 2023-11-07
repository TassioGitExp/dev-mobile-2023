import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageProps,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Card} from '../../../shared/components/card';
import {CartButton, styles} from '../styles/home.style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NavigationAction, NavigationComponent} from 'react-navigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  // ProductDetails,
  // productList,
  productListInterface,
  useProduct,
} from '../hooks/useProduct';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Product {
  id?: string;
  name: string;
  description: string;
  image: string;
  price: string;
  promo: string;
}

const images = {
  mesa1: require('../../../assets/mesa.jpeg'),
  // mesa1: require('../../../assets/mesa.jpeg'),
};

// var i = 0;
const Home = () => {
  const {getProducts} = useProduct();
  const [productList, setProductList] = useState<productListInterface[]>([]);

  const getProductList = async () => {
    const values = await AsyncStorage.getItem('productList');

    const parsedData = JSON.parse(values || '');

    const selectedAttributes = parsedData.map((item: any) => ({
      category: item.category,
      id: item.id,
      name: item.name,
      price: item.price,
    }));

    selectedAttributes.forEach(() => {
      setProductList(selectedAttributes);
    });

    return productList;
  };

  useEffect(() => {
    if (productList.length === 0) {
      console.log('lista de produtos vazia');
      getProducts();
      getProductList();
    } else {
      console.log('produtos: ');
      productList.forEach(item => {
        console.log(item);
      });
    }
  });

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
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: 'transparent',
          margin: 2,
          padding: 0,
          gap: 0,
        }}
        data={productList}
        renderItem={({item}) => (
          <Card
            onPress={() => navigation.navigate('Product', item)}
            title={item.name}
            price={item.price}
            offer={item.price / 2}
            image={images.mesa1}>
            Test
          </Card>
        )}
      />

      {/* <Card onPress={navigateToProduct}>Home Screen</Card> */}
      <CartButton onPress={() => navigation.navigate('Cart', {id: null})}>
        <Icon
          name={'shopping-cart'}
          size={36}
          style={styles.floatingCartBtnIcon}
          light></Icon>
      </CartButton>
    </SafeAreaView>
  );
};

export default Home;

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from '../styles/cart.style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CartItem} from '../../../shared/components/cart_item';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Product {
  id?: string;
  name: string;
  description: string;
  image: string;
  price: string;
  promo: string;
}
//const [products, setProducts] = useState<Product[]>([]);

const images = {
  mesa1: require('../../../assets/mesa.jpeg'),
  // mesa1: require('../../../assets/mesa.jpeg'),
};

export function removeItemFromCart(id: string) {
  //products.splice(parseInt(id) - 1, 1);
  console.log(id);
}

const Cart = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const product: Product = {
    id: route.params.id,
    name: route.params.name,
    description: route.params.description,
    image: route.params.image,
    price: route.params.price,
    promo: route.params.promo,
  };

 const [products, setProducts] = useState<Product[]>([]);


  // const storeData = async (value: any) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem(route.params.id, jsonValue);
  //   } catch (e) {
  //     // saving error
  //     console.log('storeData error');
  //   }
  // };

  // const [products, setProducts] = useState<Product[]>([
  //       {
  //         id: 'wwada',
  //         name: 'fef',
  //         description: 'adwa',
  //         image: 'ww',
  //         price: '21',
  //         promo: 'te',
  //       },
  // ]);

  const addItem = () => {
    if (route.params.id != null) {
      products.push(product);
      setProducts([...products]);

      // storeData(product);
    }
  };

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.container} onLayout={addItem}>
      {products.length <= 0 ? (
        <>
          <Icon
            name={'store-slash'}
            size={36}
            style={styles.emptyCartIcon}></Icon>
          <Text style={styles.emptyCartText}>O seu carrinho está vazio.</Text>
          <TouchableOpacity
            style={styles.backToStoreBtn}
            onPress={navigateToHome}>
            <Text style={styles.backToStoreBtnText}>Ir para a loja</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={{flex: 1, top: '-4%', alignItems: 'flex-start'}}>
          <ScrollView>
            <Text style={styles.itemAmount}>{products.length} itens</Text>
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
              data={products}
              renderItem={({item}) => (
                <>
                  {/* <Text></Text> */}
                  <CartItem
                    onPress={() => addItem()}
                    title={item.name}
                    price={item.price}
                    offer={item.promo}
                    image={item.image}></CartItem>
                </>
              )}
            />
          </ScrollView>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.footerBtn}>
              <Text style={styles.footerBtnText}>Finalizar pedido</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;

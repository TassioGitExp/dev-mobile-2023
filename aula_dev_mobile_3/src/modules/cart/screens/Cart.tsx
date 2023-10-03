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

const Cart = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [products, setProducts] = useState<Product[]>([
    // {
    //   id: 'wwada',
    //   name: 'fef',
    //   description: 'adwa',
    //   image: 'ww',
    //   price: '21',
    //   promo: 'te',
    // },
  ]);

  const addItem = () => {
    if (route.params.id != null) {
      products.push({
        id: route.params.id,
        name: route.params.name,
        description: route.params.description,
        image: route.params.image,
        price: route.params.price,
        promo: route.params.promo,
      });
      setProducts([...products]);
    }
  };

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    // console.log(route.params.id),
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
            <Text style={styles.itemAmount}>5 itens</Text>
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
                  {/* <Text>{route.params.name}</Text> */}
                  <CartItem
                    onPress={() => addItem()}
                    title={item.name}
                    price={item.price}
                    offer={item.promo}
                    image={item.image}>
                    Test
                  </CartItem>
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

import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from '../styles/cart.style';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Icon name={'store-slash'} size={36} style={styles.emptyCartIcon}></Icon>
      <Text style={styles.emptyCartText}>O seu carrinho está vazio.</Text>
      <TouchableOpacity style={styles.backToStoreBtn} onPress={navigateToHome}>
        <Text style={styles.backToStoreBtnText}>Ir para a loja</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

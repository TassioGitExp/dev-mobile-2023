import React from 'react';
import {styles} from '../styles/product.style';
import {View, ImageBackground, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  ParamListBase,
  Route,
  RouteConfig,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {NavigationAction} from 'react-navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {MyStackParamList} from '../../../@types/types';

const Product = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={route.params.image}
        imageStyle={styles.img}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonHeader}>
            <Icon name={'chevron-left'} size={22}></Icon>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonHeader}>
            <Icon name={'chevron-right'} size={22}></Icon>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <Text style={styles.nameProduct}>{route.params.name}</Text>

        <View style={styles.rowBody}>
          <Text style={styles.rate}>Avaliação</Text>

          <View style={styles.rowIncraseBtn}>
            <TouchableOpacity
              style={[styles.btnIncrase, {backgroundColor: '#1f1d1d'}]}>
              <Text style={[styles.icon, {color: '#fdf4f4'}]}>-</Text>
            </TouchableOpacity>
            <Text style={styles.valueIncrase}>1</Text>
            <TouchableOpacity
              style={[styles.btnIncrase, {backgroundColor: '#1f1d1d'}]}>
              <Text style={[styles.icon, {color: '#fdf4f4'}]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.titleSubSection}>Descrição</Text>
        <Text style={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, quia
          cupiditate facilis consequuntur commodi rerum ab omnis odit. Quis
          provident non consectetur earum optio quas natus quisquam tenetur
          soluta esse.
        </Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.titlePrice}>Preço</Text>
          <Text style={styles.price}>R$ {route.params.promo}</Text>
        </View>
        <TouchableOpacity style={styles.btnCard}>
          <Text style={styles.btnCardText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

import {useState} from 'react';
import {useAppDispatch} from '../../../store/hooks/useAppDispatch';
import {useAppSelector} from '../../../store/hooks/useAppSelector';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getAllProductsAction,
  setProductAction,
} from '../../../store/productReducer/productAction';

export type ProductDetails = {
  categoryId: number;
  name: string;
  price: number;
  complement: string;
  numberAddress: number;
  cep: string;
  cityId: number;
  image: string;
};

export interface productListInterface {
  category: object;
  id: number;
  name: string;
  price: number;
}

export interface productInterface {
  id?: number;
  name: string;
  description: string;
  image: string;
  price: string;
  promo: string;
}

export const useProduct = () => {
  const dispatch = useAppDispatch();
  const {product} = useAppSelector(store => store.product);

  const getToken = async () => {
    return await AsyncStorage.getItem('accessToken');
  };

  const getCartProducts = async () => {
    const token = await getToken();

    try {
      await axios
        .get('http://192.168.10.118:8080/cart', {
          headers: {Authorization: token},
        })
        .then(result => {
          //dispatch(getAllProductsAction(result.data));
          //setProducts(result.data);
          AsyncStorage.setItem('cartProductsList', JSON.stringify(result.data));
          console.log(result.data);
        });

      //   return product;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return error.message;
      } else {
        console.log('PRODUCTS ERROR - unexpected error: ', error);
        return 'PRODUCTS ERROR - An unexpected error occurred';
      }
    }
  };

  return {getCartProducts};
};

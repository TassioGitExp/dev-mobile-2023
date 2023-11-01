import {useState} from 'react';
import {useAppDispatch} from '../../../store/hooks/useAppDispatch';
import {useAppSelector} from '../../../store/hooks/useAppSelector';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAllProductsAction} from '../../../store/productReducer/productAction';

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

export const useProduct = () => {
  const {product} = useAppSelector(store => store.product);
  const dispatch = useAppDispatch();

  const getProducts = async () => {
    const token = await AsyncStorage.getItem('accessToken');

    try {
      await axios
        .get('http://192.168.10.118:8080/product', {
          headers: {Authorization: token},
        })
        .then(result => {
          //dispatch(getAllProductsAction(result.data));
          //setProducts(result.data);
          AsyncStorage.setItem('productList', JSON.stringify(result.data));
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
  return {getProducts};
};

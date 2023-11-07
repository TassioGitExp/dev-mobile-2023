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

  const getProducts = async () => {
    const token = await getToken();

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

  const getProductById = async (id: number) => {
    const token = await getToken();

    try {
      await axios
        .get('http://192.168.10.118:8080/product/' + id, {
          headers: {Authorization: token},
        })
        .then(result => {
          //dispatch(getAllProductsAction(result.data));
          //setProducts(result.data);
          // product = JSON.stringify(result.data);

          // AsyncStorage.clear;
          // AsyncStorage.setItem('product', product);
          dispatch(setProductAction(result.data));

          console.log('axios result: ' + JSON.stringify(result.data));

          // return myProduct;
        });
      const res = Object.assign(product);
      console.log('res:' + JSON.stringify(res));

      return res;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return error.message;
      } else {
        console.log('PRODUCTS ERROR - unexpected error: ', error);
        return 'PRODUCTS ERROR - An unexpected error occurred';
      }
    }
    // console.log('prod:' + product);

    // return product;
  };

  const addProductToCart = async (id: number, amountProd: number) => {
    const token = await getToken();

    try {
      axios.post(
        'http://192.168.10.118:8080/cart',
        {
          productId: id,
          amount: amountProd,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );
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
  return {getProducts, getProductById, addProductToCart};
};

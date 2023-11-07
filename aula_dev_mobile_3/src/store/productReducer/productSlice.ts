import {ProductState} from '../interfaces/ProductStateInterface';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: ProductState = {
  product: {},
  // myProduct: undefined,
};

export const productSlice = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getAllProductsAction: (state, action: PayloadAction<any>) => {
      state.product = action.payload;
    },
    setProductAction: (state, action: PayloadAction<any>) => {
      state.product = action.payload;
    },
  },
});

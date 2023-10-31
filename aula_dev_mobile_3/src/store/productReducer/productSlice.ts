import {ProductState} from '../interfaces/ProductStateInterface';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: ProductState = {
  product: undefined,
};

export const productSlice = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getAllProductsAction: (state, action: PayloadAction<any>) => {
      state.product?.concat(action.payload);
    },
  },
});

import {configureStore} from '@reduxjs/toolkit';
import {userSlice} from './userReducer/userSlice';
import {productSlice} from './productReducer/productSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    product: productSlice.reducer,
  },
});

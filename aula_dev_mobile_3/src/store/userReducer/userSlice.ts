import {UserState} from '../interfaces/UserStateInterface';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: UserState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      // console.log('user slice: ' + action.payload);
    },
  },
});

// export const {setUserAction} = userSlice.actions;

// export default userSlice.reducer;

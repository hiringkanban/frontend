import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuth: localStorage.getItem('authenticated') === 'token' },
  reducers: {
    updateAuth: (state, action) => {
      return { ...state, isAuth: action.payload };
    },
  },
});

// this is for dispatch
export const { updateAuth } = authSlice.actions;

// this is for configureStore
export default authSlice.reducer;

// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    clearToken(state) {
      state.token = null;
      state.isAuthenticated = false;
    },
    setUserData(state,action){
        state.user=action.payload
    },
    clearUserData(state){
        state.user=null
    }
  },
});

export const { setToken, clearToken,setUserData,clearUserData } = authSlice.actions;
export default authSlice.reducer;

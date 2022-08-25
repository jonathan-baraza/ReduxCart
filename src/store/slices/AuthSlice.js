import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "authSlice",
  initialState: { isAuthenticated: false },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
    },
  },
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice;

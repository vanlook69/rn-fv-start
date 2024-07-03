import { createSlice } from "@reduxjs/toolkit";

export const UserEmptyState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: UserEmptyState,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      return UserEmptyState;
    },

    isLogin: (state, action) => {
      console.log("Slice: ", action.payload.token);
      //  state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    logout: (state) => {
      //  state.isAuthenticated = false;
      state.token = "";
      //state.user = null;
    },
  },
});

export const { isLogin, logout, createUser, modifyUser, resetUser } =
  authSlice.actions;
//export const selectIsAuthenticated = (state) => state.isAuthenticated;
// export const selectToken = (state) => state.token;
// export const selectUser = (state) => state.authState.user;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const UserEmptyState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: UserEmptyState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    createUser: (state, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      return UserEmptyState;
    },
  },
});

export const { setAuthenticated, createUser, modifyUser, resetUser } =
  userSlice.actions;

export const selectUser = (state) => state.user;
//export default userSlice.reducer;

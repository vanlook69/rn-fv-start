import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice.js";
import { friendSlice } from "./slices/friendSlice.js";

export const Store = configureStore({
  reducer: {
    user: userSlice.reducer,
    friends: friendSlice.reducer,
  },
});

export default Store;

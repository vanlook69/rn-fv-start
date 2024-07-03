import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "../../apollo/apollo";

// Thunks para manejar operaciones asíncronas
export const loadUser = createAsyncThunk("auth/loadUser", async () => {
  const token = await AsyncStorage.getItem("token");
  const user = token ? JSON.parse(await AsyncStorage.getItem("user")) : null;
  return { token, user };
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await AsyncStorage.removeItem("token");
  await AsyncStorage.removeItem("user");
  client.resetStore();
});

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      AsyncStorage.setItem("token", action.payload.token);
      AsyncStorage.setItem("user", JSON.stringify(action.payload.user));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.fulfilled, (state, action) => {
        if (action.payload.user) {
          state.isAuthenticated = true;
          state.user = action.payload.user;
        }
        state.loading = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;

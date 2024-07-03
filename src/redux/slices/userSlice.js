import { createSlice } from "@reduxjs/toolkit";

const UserEmptyState = {
  isAuthenticated: false,
  token: null,
  userId: null,
  user: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: UserEmptyState,
  reducers: {
    // Acción para iniciar sesión exitosamente
    loginSuccess(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    // Acción para cerrar sesión
    logoutSuccess(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    // Acción para manejar errores de inicio de sesión
    loginFailure(state, action) {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    resetUser: () => {
      return UserEmptyState;
    },
  },
});

export const {
  setAuthenticated,
  setToken,
  setUserId,
  setUser,
  setLoading,
  setError,
  clearError,
  resetUser,

  loginSuccess,
  logoutSuccess,
  loginFailure,

  // createUser,
  // modifyUser,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;

//export const selectUser = (state) => state.user;

//export default userSlice.reducer;

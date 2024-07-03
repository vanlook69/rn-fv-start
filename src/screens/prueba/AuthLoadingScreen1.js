import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../store/slices/authSlice";

const AuthLoadingScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      // navigation.navigate(isAuthenticated ? "Home" : "Login");
      navigation.replace(isAuthenticated ? "Home" : "Login");
    }
  }, [loading, isAuthenticated, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default AuthLoadingScreen;

import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/slices/authSlice";

import { useAuth } from "../../hooks/useAuth";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.user);
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.replace("NavigationStart");
    // navigation.navigate("Login");
  };

  return (
    <View>
      {user ? (
        <View>
          <Text>Welcome: {user.name}</Text>
          <Text>UserName: {user.username}</Text>
          <Text>Email: {user.email}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default HomeScreen;

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "@hooks/useAuth";

export function ChatsScreen() {
  const { user, token, userId: id } = useAuth();
  // console.log("ChatsScreen: ", user);
  // const { user } = useSelector((state) => state.user.user);

  // console.log("Chats: ", user);
  return (
    <View style={styles.container}>
      {user ? (
        <View>
          <Text>Name: {user.name ? user.name : "Anónimo"}</Text>
          <Text>UserName: {user.username ? user.username : "XZXZXZXZ"}</Text>
          <Text>Email: {user.email ? user.email : "Socia Login"}</Text>
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

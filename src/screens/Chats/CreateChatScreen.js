import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { useAuth } from "@hooks/useAuth";

const userPosts = [
  { id: "1", image: "https://via.placeholder.com/150" },
  { id: "2", image: "https://via.placeholder.com/150" },
  // Agrega más posts aquí
];

export function CreateChatScreen({ navigation }) {
  const { user, token, userId: id } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://via.placeholder.com/100" }}
        />
        {user ? (
          <View>
            {/* <Text style={styles.username}>Username</Text> */}
            <Text style={styles.username}>
              {user.username ? user.username : "XZXZXZXZ"}
            </Text>

            <Text style={styles.bio}>This is the user bio</Text>
          </View>
        ) : (
          <Text></Text>
        )}
      </View>
      <FlatList
        data={userPosts}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.postImage} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    padding: 20,
    marginTop: 45,
    // backgroundColor: "red",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    // justifyContent: "center",
    // backgroundColor: "red",
  },
  bio: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginTop: 5,
  },
  postImage: {
    width: "33%",
    height: 100,
  },
});

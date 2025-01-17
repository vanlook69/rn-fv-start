import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import colors from "../utils/constants/colors";

//import Chat from "./Chat";

export default function HomeChat() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesome
          name="search"
          size={24}
          color={colors.gray}
          style={{ marginLeft: 15 }}
        />
      ),
      //   headerRight: () => (
      //     <Image
      //       source={{ uri: catImageUrl }}
      //       style={{
      //         width: 40,
      //         height: 40,
      //         marginRight: 15,
      //       }}
      //     />
      //   ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Call")}
        style={styles.chatButton}
      >
        <Icon
          type="material-community"
          name="cog-sync-outline"
          size={24}
          color="#fff"
        />
        {/* <Entypo name="globe" size={24} color={colors.lightGray} /> */}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Message")}
        style={styles.chatButton}
      >
        <Entypo name="compass" size={24} color={colors.lightGray} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Call")}
        style={styles.chatButton}
      >
        <Entypo name="phone" size={24} color={colors.lightGray} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Message")}
        style={styles.chatButton}
      >
        <Entypo name="chat" size={24} color={colors.lightGray} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#fff",
  },
  chatButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 20,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Reel() {
  return (
    <View style={styles.container}>
      <Text>Reel</Text>
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

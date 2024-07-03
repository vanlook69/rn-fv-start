import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Fence() {
  return (
    <View style={styles.container}>
      <Text>Fence</Text>
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

import React from "react";
import { StyleSheet, View, Text } from "react-native";

export function AuthStartScreen() {
  return (
    <View style={styles.container}>
      <Text>AuthStartScreen</Text>
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

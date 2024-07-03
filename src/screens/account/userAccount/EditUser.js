import React, { useState, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import Colors from "../../../utils/colors/colors";
import COLORS from "../../../utils/colors/colors";
//import AccountOptions from "../../components/account/AccountOptions";

import { AuthenticatedUserContext } from "../../../context/AuthUser/AuthUser";

export default function EditUser() {
  const { user, logout } = useContext(AuthenticatedUserContext);
  const { uid, photoURL, displayName, email } = user;
  return (
    <View style={styles.container}>
      <View style={styles.detailsCard}>
        <Text style={styles.displayName}>
          {displayName ? displayName : "Anónimo"}
        </Text>
        <Text style={styles.displayEmail}>{email ? email : "Socia Login"}</Text>
      </View>
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
  detailsCard: {
    marginTop: 15,
    height: 150,
    width: "65%",
    backgroundColor: "white",
    marginHorizontal: 20,
    bottom: 1,
    borderRadius: 18,
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 20,
  },
  Botton: {
    backgroundColor: "#FAFAFA",
    // backgroundColor: colors.gray,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "gray",
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

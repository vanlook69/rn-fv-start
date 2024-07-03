import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

//import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

//import { userQuery } from "@functions/userQuery";

import { useQuery } from "@apollo/client";
import { GET_USER } from "@gql/user";
import { useAuth } from "@hooks/useAuth";
import {
  setAuthenticated,
  setUser,
  resetUser,
} from "@redux/slices/userSlice.js";
// import jwtDecode from "jwt-decode";
// import { useDispatch, useSelector } from "react-redux";

// import { setAuthenticated } from "@redux/slices/userSlice";

// import colors from "@utils/constants/colors";
// import COLORS from "@utils/constants/colors2";
import MyButtonCircle from "@components/myComponents/botton/myButtonCircle";

export function ContainerChat({ navigation }) {
  // const dispatch = useDispatch();
  //const { user, token, userId: id } = useAuth();
  // console.log("user: ", user);
  // console.log("Token: ", token);
  //console.log("userIdContainer: ", id);

  // const {
  //   data,
  //   loading: load,
  //   error,
  // } = useQuery(GET_USER, {
  //   variables: { id },
  // });

  // if (load || error) return null;

  // const { getUser } = data;
  // console.log("Container: ", getUser);
  // dispatch(
  //   setUser({
  //     user: getUser,
  //   })
  // );

  // userQuery();
  // const { isAuthenticated, token, user } = useSelector((state) => state.user);
  // userQuery(token);
  //const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.EditContainer}>
        <MyButtonCircle
          type={"material-community"}
          name={"account-edit-outline"}
          size={24}
          color={"#E53935"}
          onPress={() => navigation.navigate("FriendsScreen")}
          //  onPress={() => navigation.navigate("ChatScreen")}
        />

        <MyButtonCircle
          type={"material-community"}
          name={"collapse-all-outline"}
          size={24}
          color={"#E53935"}
          onPress={() => navigation.navigate("ChatsScreen")}
        />

        <MyButtonCircle
          type={"material-community"}
          name={"cogs"}
          size={24}
          color={"#E53935"}
          onPress={() => navigation.navigate("CreateChatScreen")}
        />

        <MyButtonCircle
          type={"material-community"}
          name={"cogs"}
          size={24}
          color={"#E53935"}
          onPress={() => navigation.navigate("AccountScreen")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  EditContainer: {
    marginTop: 20,
    height: 60,
    width: "60%",
    //alignItems: "center",
    justifyContent: "center",

    //backgroundColor: COLORS.white,
    marginHorizontal: 15,
    flexDirection: "row",
  },
});

// import React, { useState, useContext } from "react";
// import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
// import { Image, Avatar, Icon } from "react-native-elements";
// //import * as firebase from "firebase";

// import { AuthenticatedUserContext } from "../../context/AuthUser/AuthUser";

// export default function ViewPhoto() {
//   const { user } = useContext(AuthenticatedUserContext);
//   const { uid, photoURL, displayName, email } = user;

//   return (
//     <>
//       <View style={styles.viewUserInfo}>
//         <Image
//           source={
//             photoURL
//               ? { uri: photoURL }
//               : require("../../../assets/img/avatar-default.jpg")
//           }
//           //resizeMode="center"
//           resizeMode="contain"
//           // style={{ width: 200, height: 200 }}
//           containerStyle={styles.userImage}
//           //PlaceholderContent={<ActivityIndicator />}
//         />
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   viewUserInfo: {
//     flex: 1,
//     // alignItems: "flex-start",
//     alignItems: "center",
//     //justifyContent: "flex-start",
//     justifyContent: "center",
//     //flexDirection: "row",
//     //backgroundColor: "#f2f2f2",
//     // backgroundColor: "#f2f2f2",
//     //backgroundColor: "red",
//     //paddingTop: 50,
//     //paddingBottom: 30,
//   },
//   userImage: {
//     //aspectRatio: 1,
//     width: "100%",
//     height: "100%",

//     //width: 350,
//     //height: 350,
//     // flex: 1,
//     //marginTop: 5,
//     // marginBottom: 10,
//     //padding: 10,
//     // backgroundColor: COLORS.secondary,
//     // width: "100%",
//     // height: "100%",
//     // alignItems: "flex-start",
//     // alignItems: "center",
//     //top: 20,
//     //  elevation: 10,
//     //flexDirection: "row",
//   },
// });

import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ViewPhoto() {
  return (
    <View>
      <Text>ViewPhoto</Text>
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

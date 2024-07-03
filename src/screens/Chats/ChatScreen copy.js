import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useAuth, useFriends } from "@hooks/";
//import { useQuery } from "@apollo/client";
// import jwtDecode from "jwt-decode";
//import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch, useSelector } from "react-redux";
//import FriendComponent from './FriendComponent';

//import { userQuery } from "@functions/userQuery";

//import { GET_USER } from "@gql/user";
// import { setAuthenticated } from "@redux/slices/userSlice";

export function ChatScreen() {
  // userQuery();
  //const ChatScreen = async () => {
  // const dispatch = useDispatch();
  // const { isAuthenticated, token, user } = useSelector(
  //   (state) => state.user.user
  // );

  const { user } = useAuth();
  const { friends } = useFriends();

  //const friends = useSelector((state) => state.friends.friends);
  //const user = useSelector(selectUser);

  // // console.log("Alert");
  //console.log("Chat: ", user);
  // //const token = AsyncStorage.getItem("token");
  // //const token = await AsyncStorage.getItem("token");
  // // try {
  // if (!token) {
  // } else {

  //////// userQuery();

  // }
  //   const { user_id: id } = jwtDecode(token);
  //   // console.log("TOKEN: ", id);
  //   const { loading, error, data } = useQuery(GET_USER, {
  //     variables: { id },
  //   });

  //   if (loading || error) return null;
  //   const user = data.getUser;
  //   // if (loading) return "Loading...";
  //   // if (error) return `Error! ${error.message}`;

  //   //const { name } = data.getUser;
  //   // console.log("DATA: ", user);
  //   if (user) {
  //     console.log("1MMM: ", user);
  //     dispatch(
  //       setAuthenticated({
  //         isAuthenticated: true,
  //         token,
  //         user,
  //       })
  //     );

  //     // console.log("1MMM: ", token);
  //   } else {
  //     // dispatch(
  //     //   setAuthenticated({
  //     //     isAuthenticated: true,
  //     //     token,
  //     //     user,
  //     //   })
  //     // );
  //     //dispatch(setAuthenticated({ user: getUser }));
  //     console.log("2CCC: ", user);
  //     // console.log("2CCC: ", token);
  //   }
  //   //dispatch(setAuthenticated({ user: data.getUser.name }));
  //   // const { data, loading, error } = useQuery(GET_USER, {
  //   //   variables: { id },
  //   //   onCompleted: (queryData) => {
  //   //     // dispatch(setAuthenticated({ user: queryData.user }));
  //   //     console.log("DATA: ", queryData.user.name);
  //   //   },
  //   // });
  // }
  // } catch (error) {
  //   console.error("Error fetching token from Storage:", error);
  // }

  return (
    <View style={styles.container}>
      {user ? (
        <View>
          <Text style={styles.header}>Friend List</Text>
          <FlatList
            data={friends}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => <FriendComponent friendId={item} />}
          />

          {/* <Text>Name:{user.email}</Text> */}
          {/* <Text>Name: {user.name ? user.name : "Anónimo"}</Text>
      <Text>UserName: {user.username ? user.username : "XZXZXZXZ"}</Text>
      <Text>Email: {user.email ? user.email : "Socia Login"}</Text> */}

          {/* <Text>Nombre: {data.user.name}</Text>
      <Text>Email: {data.user.email}</Text> */}
          {/* Mostrar otros campos del usuario si es necesario */}
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}

// import React, { useEffect } from "react";
// import { StyleSheet, View, Text } from "react-native";
// import { useQuery, gql } from "@apollo/client";
// //import { useQuery } from "@apollo/react-hooks";
// import jwtDecode from "jwt-decode";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import { GET_USER } from "@gql/user";

// // export const GET_USER = gql`
// //   query GetUser($id: ID, $username: String, $email: String) {
// //     getUser(id: $id, username: $username, email: $email) {
// //       id
// //       name
// //       username
// //       email
// //       siteWeb
// //       description
// //       avatar
// //       activated
// //       createdAt
// //       updatedAt
// //     }
// //   }
// // `;
// //console.log(GET_USER);
// //console.log(JSON.stringify(GET_USER));
// // import {
// //   setAuthenticated,
// //   token,
// //   user,
// //   resetUser,
// // } from "@redux/slices/userSlice.js";

// // const { user_id } = jwtDecode(token);
// // console.log("LoginUser: ", id);

// // Utiliza useQuery para ejecutar la consulta
// // const { data, loading, error } = useQuery(GET_USER, {
// //   variables: { id },
// // });

// // if (loading) return <Text>Cargando...</Text>;
// // if (error) return <Text>Error: {error.message}</Text>;

// // Una vez que se completa la consulta, muestra los datos

// export default function ChatScreen() {
//   //const Wall = () => {

//   const checkToken = async () => {
//     console.log("Alert");
//     const token = await AsyncStorage.getItem("token");
//     try {
//       if (!token) {
//       } else {
//         const { user_id: id } = jwtDecode(token);
//         console.log("TOKEN: ", id);
//         // const { loading, error, data } = useQuery(GET_USER, {
//         //   variables: { id },
//         // });
//         // const { data, loading, error } = useQuery(GET_USER, {
//         //   variables: { id },
//         //   onCompleted: (queryData) => {
//         //     console.log("DATA: ", queryData);
//         //   },
//         // });
//         // console.log("DATA: ", data);
//       }
//     } catch (error) {
//       console.error("Error fetching token from Storage:", error);
//     }
//   };

//   useEffect(() => {
//     checkToken();
//   }, []);

//   return (
//     <View>
//       <Text>Nombre:</Text>

//       {/* <Text>Nombre: {data.user.name}</Text>
//       <Text>Email: {data.user.email}</Text> */}
//       {/* Mostrar otros campos del usuario si es necesario */}
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

//export default ChatScreen;

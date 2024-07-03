import React from "react";
import { StyleSheet, View, FlatList, Text, Button } from "react-native";
import { useAuth, useFriends } from "@hooks/";
// import jwtDecode from "jwt-decode";
//import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch, useSelector } from "react-redux";
import { useQuery, useMutation } from "@apollo/client";

import { IS_FOLLOW, FOLLOW, UN_FOLLOW } from "@gql/follow/";

// import { followFriend, unfollowFriend } from './slice';
// import { GET_FRIENDS, FOLLOW_FRIEND, UNFOLLOW_FRIEND } from './queries';

//import FriendComponent from './FriendComponent';

//import { userQuery } from "@functions/userQuery";

export function ChatScreen() {
  const dispatch = useDispatch();
  // userQuery();
  //const ChatScreen = async () => {
  // const dispatch = useDispatch();
  // const { isAuthenticated, token, user } = useSelector(
  //   (state) => state.user.user
  // );

  const { user } = useAuth();
  const { friends } = useFriends();

  //console.log("User: ", user.username);

  const [follow] = useMutation(FOLLOW);
  const [unFollow] = useMutation(UN_FOLLOW);
  const { data, loading, error } = useQuery(IS_FOLLOW, {
    variables: { username: user.username },
  });

  console.log("isFollow: ", data.isFollow);
  // const { loading, error, data } = useQuery(GET_FRIENDS);
  // const [followMutation] = useMutation(FOLLOW_FRIEND);
  // const [unfollowMutation] = useMutation(UNFOLLOW_FRIEND);

  //const friends = useSelector((state) => state.friends.friends);

  const onFollow = async () => {
    try {
      await follow({ variables: { username: user.username } });
      console.log("Aqui: ", user.username);
      // refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const onUnFollow = async () => {
    try {
      await unFollow({ variables: { username: user.username } });
      //  refetch();
    } catch (error) {
      console.log(error);
    }
  };

  // const handleFollow = async (friendId) => {
  //   try {
  //     await followMutation({ variables: { friendId } });
  //     dispatch(followFriend({ friendId }));
  //   } catch (err) {
  //     console.error("Error following friend:", err);
  //   }
  // };

  // const handleUnfollow = async (friendId) => {
  //   try {
  //     await unfollowMutation({ variables: { friendId } });
  //     dispatch(unfollowFriend({ friendId }));
  //   } catch (err) {
  //     console.error("Error unfollowing friend:", err);
  //   }
  // };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      {user ? (
        <View>
          <Text style={styles.header}>Friend List</Text>
          {/* {friends.map((friend) => (
            <View key={friend.id}>
              <Text>{friend.name}</Text> */}
          {data.isFollow ? (
            <Button title="Unfollow" onPress={() => onUnFollow()} />
          ) : (
            <Button title="Follow" onPress={() => onFollow()} />
          )}
          {/* </View>
          ))} */}

          {/* <FlatList
            data={friends}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => <FriendComponent friendId={item} />}
          /> */}

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

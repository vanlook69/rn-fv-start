import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Text } from "react-native-elements";
// import { useQuery } from "@apollo/client";
// import { GET_FOLLOWERS, GET_FOLLOWEDS } from "@gql/follow";
import { FollowItem } from "../../../components/Shared";
import { styles } from "./FollowersScreen.styles";

export function FollowersScreen(props) {
  const {
    route: { params },
  } = props;

  const users = params.getFollowers;
  // const {
  //   route: { params },
  // } = props;
  // console.log("open followersZZ: ", params.idUser);
  // const [users, setUsers] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await follow.getFollowers(accessToken, params.idUser);
  //       setUsers(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, [params.idUser]);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Seguidores</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <FollowItem user={item} />}
        keyExtractor={(_, index) => index}
        ListEmptyComponent={
          <View>
            <Text>Aun no te sigue nadie, sube más contenido</Text>
          </View>
        }
      />
    </View>
  );
}

import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Text } from "react-native-elements";
// import { useQuery, useLazyQuery } from "@apollo/client";
// import { GET_FOLLOWERS, GET_FOLLOWEDS } from "@gql/follow";
import { FollowItem } from "../../../components/Shared";
import { styles } from "./FollowedsScreen.styles";

export function FollowedsScreen(props) {
  // const [users, setUsers] = useState(null);
  const {
    route: { params },
  } = props;

  const users = params.getFolloweds;
  // console.log("route", users);
  // const { idUser } = params;
  // console.log("open followedsXX: ", idUser);

  // const { data, loading, refetch } = useQuery(GET_FOLLOWEDS, {
  //   variables: { idUser },
  // });

  // if (loading) return null;
  // setUsers(data);
  // console.log(users);
  // const goToUser = () => {

  // };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const [getLazyResults, { loading, error, data }] = useLazyQuery(GET_FOLLOWEDS, {
  //         variables: { idUser },
  //       });
  //       //       const response = await follow.getFolloweds(accessToken, params.idUser);
  //       //       setUsers(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, [idUser]);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Siguiendo</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <FollowItem user={item} />}
        keyExtractor={(_, index) => index}
        ListEmptyComponent={
          <View>
            <Text>Empieza a seguir a algun usuario</Text>
          </View>
        }
      />
    </View>
  );
}

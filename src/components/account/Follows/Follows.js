import React, { useState, useEffect } from "react";
import { View, Pressable } from "react-native";
import { Text } from "react-native-elements";
import { size } from "lodash";
import { useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../utils";
import { useAuth } from "@hooks/useAuth";

import { GET_FOLLOWERS, GET_FOLLOWEDS } from "@gql/follow";
// import { Follow } from "../../../api";
// import { useAuth } from "../../../hooks";
import { styles } from "./Follows.styles";

//const follow = new Follow();

export function Follows(props) {
  const { idUser, username } = props;
  // const { user, userId } = useAuth();
  // const { username } = user;
  // console.log(username);
  const [followedsCount, setFollowedsCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [followeds, setFolloweds] = useState({});
  const [followers, setFollowers] = useState({});
  const navigation = useNavigation();
  //const { accessToken } = useAuth();

  const {
    data: dataFollowers,
    loading: loadingFollowers,
    refetch: refetchFollowers,
    // startPolling: startPollingFollowers,
    // stopPolling: stopPollingFollowers,
  } = useQuery(GET_FOLLOWERS, {
    variables: { username },
    // onCompleted: () => {
    //   setFollowersCount(dataFollowers);
    //   console.log(dataFollowers.getFollowers);
    //   console.log(username);
    // },
  });

  const {
    data: dataFolloweds,
    loading: loadingFolloweds,
    refetch: refetchFolloweds,
    // startPolling: startPollingFolloweds,
    // stopPolling: stopPollingFolloweds,
  } = useQuery(GET_FOLLOWEDS, {
    variables: { username },
    // onCompleted: (dataFolloweds) => {
    //   setFollowedsCount(dataFolloweds);
    // },
  });

  useEffect(() => {
    // console.log("useEffect");
    refetchFollowers();
    refetchFolloweds();
  }, []);

  if (loadingFollowers || loadingFolloweds) return null;
  // setFollowers(dataFollowers);
  //setFolloweds(dataFolloweds);
  const { getFollowers } = dataFollowers;
  const { getFolloweds } = dataFolloweds;
  //setFolloweds(dataFolloweds);

  // console.log("getFolloweds :", getFolloweds);

  const openFolloweds = () => {
    // console.log("open followeds: ", idUser);
    navigation.navigate(screens.app.followeds, { getFolloweds });
    // navigation.navigate(screens.app.followeds, { idUser });
    //navigation.navigate(screens.app.followeds);
    // navigation.navigate("FollowedsScreen");
  };

  const openFollowers = () => {
    navigation.navigate(screens.app.followers, { getFollowers });
    // console.log("open followers: ", idUser);
    // navigation.navigate(screens.app.followers, { idUser });
    // navigation.navigate(screens.app.followers);
    //navigation.navigate("FollowersScreen");
  };

  return (
    <View style={styles.content}>
      <Pressable style={styles.item} onPress={openFolloweds}>
        <Text style={styles.count}>{size(getFolloweds)}</Text>
        <Text style={styles.title}>Siguiendo</Text>
      </Pressable>
      <Pressable style={styles.item} onPress={openFollowers}>
        <Text style={styles.count}>{size(getFollowers)}</Text>
        <Text style={styles.title}>Seguidores</Text>
      </Pressable>
    </View>
  );
}

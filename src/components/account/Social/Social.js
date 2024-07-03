import React, { useState, useEffect } from "react";
import { View, Linking } from "react-native";
import { Button } from "react-native-elements";
import { useQuery, useMutation } from "@apollo/client";
import { IS_FOLLOW, FOLLOW, UN_FOLLOW } from "@gql/follow";
//import { Follow, Notification } from "../../../api";
//import { useAuth } from "../../../hooks";
//import { ENV } from "../../../utils";
import MyButtonCircle from "@components/myComponents/botton/myButtonCircle";
import { styles } from "./Social.styles";

// const followController = new Follow();
// const notification = new Notification();

export function Social(props) {
  // const { username } = props;
  const { idUser, username } = props;
  // const { idUser, instagram } = props;
  // console.log("ID: ", idUser);
  // console.log("ID: ", username);

  const [isFollowing, setIsFollowing] = useState(undefined);
  const [follow] = useMutation(FOLLOW);
  const [unFollow] = useMutation(UN_FOLLOW);

  const { data, loading, refetch } = useQuery(IS_FOLLOW, {
    variables: { username },
  });
  //const { accessToken, auth } = useAuth();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await followController.isFollowing(
  //         accessToken,
  //         auth.user_id,
  //         idUser
  //       );
  //       setIsFollowing(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);

  // const openUrl = () => {
  //   Linking.openURL(`https://www.instagram.com/${instagram}`);
  // };

  const following = async () => {
    try {
      await follow({
        variables: {
          username,
        },
      });
      refetch();
      // await followController.follow(accessToken, auth.user_id, idUser);
      // await notification.create({
      //   token: accessToken,
      //   idUserFollower: auth.user_id,
      //   idTargetUser: idUser,
      //   typeNotification: ENV.TYPE_NOTIFICATION.FOLLOW,
      // });
      setIsFollowing(true);
    } catch (error) {
      console.error(error);
    }
  };

  const unfollowing = async () => {
    try {
      await unFollow({
        variables: {
          username,
        },
      });
      refetch();
      // const response = await followController.getFollowing(
      //   accessToken,
      //   auth.user_id,
      //   idUser
      // );
      // const idFollow = response.id;

      // await followController.deleteFollow(accessToken, idFollow);
      setIsFollowing(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return null;
  // console.log("Respuesta: ", data.isFollow);
  // if (!user) return null;

  return (
    <View style={styles.content}>
      {data.isFollow === false ? (
        <Button
          title="Seguir"
          buttonStyle={styles.follow}
          containerStyle={styles.follow}
          onPress={following}
        />
      ) : null}

      {data.isFollow ? (
        <MyButtonCircle
          type={"material-community"}
          name={"star-circle"}
          // name={"shield-star"}
          size={50}
          color={"#E53935"}
          //onPress={() => getUser()}
          onPress={() => unfollowing()}
        />
      ) : null}

      {/* {instagram ? (
        <Button
          icon={{ type: "material-community", name: "instagram" }}
          buttonStyle={styles.social}
          containerStyle={styles.social}
          onPress={openUrl}
        />
      ) : null} */}

      {/* <Button
          icon={{ type: "material-community", name: "account-check-outline" }}
          buttonStyle={styles.unfollowing}
          containerStyle={styles.unfollowing}
          onPress={unfollowing}
        /> */}
    </View>
  );
}

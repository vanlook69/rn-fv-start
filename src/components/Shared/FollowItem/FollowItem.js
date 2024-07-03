import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { LOGO } from "../../../assets/images";
import { screens } from "../../../utils";
import { styles } from "./FollowItem.styles";

export function FollowItem(props) {
  const { user } = props;
  //console.log("userXX: ", user);
  const navigation = useNavigation();

  const goToUser = () => {
    navigation.goBack();
    // console.log("Aquí: ", user);
    //navigation.navigate(screens.app.user, { idUser: user.id });
    navigation.navigate(screens.app.user, { username: user.username });
  };

  return (
    <TouchableOpacity style={styles.content} onPress={goToUser}>
      <Avatar
        source={user.avatar ? { uri: user.avatar } : LOGO}
        rounded
        size={30}
      />
      <View style={styles.info}>
        <Text>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </TouchableOpacity>
  );
}

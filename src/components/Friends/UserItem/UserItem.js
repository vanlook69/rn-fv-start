import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { LOGO } from "../../../assets/images";
import { screen } from "../../../utils";
import { styles } from "./UserItem.styles";

export function UserItem(props) {
  const {
    result: { id, avatar, username },
  } = props;
  const navigation = useNavigation();

  const goToProfile = () => {
    // navigation.navigate(screen.app.user, { idUser: id });
    //navigation.navigate(screen.app.user, { username });
    //navigation.navigate(UserScreen, { username });
    navigation.navigate("UserScreen", { username });
    //console.log("Aquí: ", username);
  };

  return (
    <TouchableOpacity style={styles.content} onPress={goToProfile}>
      <Avatar source={avatar ? { uri: avatar } : LOGO} rounded size={60} />
      <Text style={styles.text}>{username}</Text>
    </TouchableOpacity>
  );
}

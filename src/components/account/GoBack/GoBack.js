import React, { useState } from "react";
import { View } from "react-native";
import { Text, Avatar } from "react-native-elements";
import { styles } from "./GoBack.styles";
import MyIcon from "@components/icons/MyIcon";

export function GoBack({ navigation }) {
  // const { navigation } = props;
  const [showMessage, setShowMessage] = useState(true);

  return (
    <View style={styles.content}>
      <MyIcon
        autoFocus={showMessage ? false : true}
        name={"axis-z-rotate-clockwise"}
        type={"material-community"}
        size={30}
        onPress={() => navigation.navigate("ChatsScreen")}
        //onPress={() => navigation.goBack()}
        // onPress={() => onPress}
        //onPress={() => goBack()}
        color={"#2E86C1"}
      />
    </View>
  );
}

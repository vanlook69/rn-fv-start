import React from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { lowerCase } from "lodash";
// import { useQuery } from "@apollo/client";
// import { SEARCH } from "../../../gql/user";
import { styles } from "./Search.styles";

export function Search(props) {
  const { setSearch } = props;

  return (
    <View>
      <Input
        autoFocus={true}
        autoCapitalize="none"
        autoCorrect={false}
        onkeyup={lowerCase}
        placeholder="Encuentra amigos"
        inputContainerStyle={styles.inputContainer}
        leftIcon={{
          type: "material-community",
          name: "magnify",
        }}
        onChangeText={(text) => setSearch(text)}
      />
    </View>
  );
}

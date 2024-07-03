import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { Text } from "react-native-elements";
import { Search, UserItem } from "@components/Friends";

import { size } from "lodash";
import MyIconBack from "@components/icons/MyIconBack";
import { useQuery } from "@apollo/client";
import { SEARCH } from "../../gql/user";

export function FriendsScreen({ navigation }) {
  //const [users, setUsers] = useState();
  const [showMessage, setShowMessage] = useState(true);
  const [search, setSearch] = useState(null);
  const [results, setResults] = useState([]);
  //const [searchText, setSearchText] = useState("");

  //console.log(search);

  const { data, loading } = useQuery(SEARCH, {
    variables: { search },
  });

  // console.log(results);

  useEffect(() => {
    if (size(data?.search) > 0) {
      const users = [];
      data.search.forEach((user, index) => {
        users.push({
          key: index,
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
        });
      });
      setResults(users);
    } else {
      setResults([]);
    }
  }, [data]);

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const response = await usersController.obtains(accessToken, searchText);
  //         setUsers(response);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     })();
  //   }, [searchText]);

  return (
    <View style={{ flex: 1, marginTop: 60 }}>
      <SafeAreaView>
        <MyIconBack
          autoFocus={showMessage ? false : true}
          name={"axis-z-rotate-clockwise"}
          type={"material-community"}
          size={30}
          // onPress={() => navigation.replace("ContainerChat")}
          onPress={() => navigation.goBack()}
          color={"#2E86C1"}
        />
        <Search setSearch={setSearch} />
      </SafeAreaView>

      <FlatList
        style={{
          marginHorizontal: 12,
          height: "100%",
        }}
        data={results}
        numColumns={4}
        keyExtractor={(item) => item.id}
        //renderItem={({ item }) => <Text>{item.username}</Text>}
        renderItem={({ item }) => <UserItem result={item} />}
        ListEmptyComponent={
          <Text style={{ textAlign: "center" }}>
            No se han encontardo usuarios
          </Text>
        }
      />
    </View>
  );
}

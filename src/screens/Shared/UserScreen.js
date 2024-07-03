import { gql } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { Tab, TabView } from "react-native-elements";
import { GET_USERNAME } from "@gql/user";
import { useQuery } from "@apollo/client";
//import { User } from "../../api";

import MyIconBack from "@components/icons/MyIconBack";
//import { useAuth } from "@hooks";
import { Account } from "../../components/account";

//const userController = new User();

//export function UserScreen({ navigation }) {
export function UserScreen(props) {
  const {
    route: { params },
    navigation,
  } = props;
  //const [user, setUser] = useState(null);
  const [showMessage, setShowMessage] = useState(true);
  const [tabActive, setTabActive] = useState(0);
  // const { accessToken } = useAuth();
  // const idUser = params.idUser;
  const username = params.username;
  //const id = params.id;

  const { data, loading } = useQuery(GET_USERNAME, {
    variables: { username },
  });

  if (loading) return null;
  const { getUsername: user } = data;
  //console.log("Resultado: ", data);
  // setUser(dataUser);

  if (!user) return null;

  return (
    <ScrollView style={{ flex: 1, marginTop: 60 }}>
      <MyIconBack
        autoFocus={showMessage ? false : true}
        name={"axis-z-rotate-clockwise"}
        type={"material-community"}
        size={30}
        // onPress={() => navigation.replace("ContainerChat")}
        onPress={() => navigation.goBack()}
        color={"#2E86C1"}
      />
      <Account.Header avatar={user.avatar} username={user.username} />
      <Account.Follows idUser={user.id} username={username} />
      <Account.Social idUser={user.id} username={username} />
      {/* <Account.Social idUser={user.id} instagram={user.instagram} /> */}
      {/* <Account.Info description={user.description} website={user.website} /> */}

      {/* <Tab
        value={tabActive}
        onChange={(e) => setTabActive(e)}
        indicatorStyle={{ backgroundColor: "#fff" }}
      >
        <Tab.Item
          containerStyle={{ backgroundColor: "transparent" }}
          icon={{ type: "material-community", name: "grid" }}
        />
        <Tab.Item
          containerStyle={{ backgroundColor: "transparent" }}
          icon={{ type: "material-community", name: "heart" }}
        />
      </Tab> */}
      {/* <TabView value={tabActive} onChange={setTabActive} animationType="timing">
        <TabView.Item>
          <Account.Videos idUser={user.id} />
        </TabView.Item>
        <TabView.Item>
          <Account.VideosFavorites idUser={user.id} />
        </TabView.Item>
      </TabView> */}
    </ScrollView>
  );
}

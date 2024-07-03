import React, { useState, useCallback } from "react";
import { ScrollView } from "react-native";
import { View, Text, Tab, TabView } from "react-native-elements";
import { useFocusEffect } from "@react-navigation/native";
//import { User } from "../../../api";
//import { useAuth } from "../../../hooks";
import MyIconBack from "@components/icons/MyIconBack";
import { useAuth } from "@hooks/useAuth";
import { Account } from "../../../components/account";
import { GoBack } from "../../../components/account/GoBack";
import { styles } from "./AccountScreen.styles";

//const userController = new User();

export function AccountScreen({ navigation }) {
  // const { navigation } = props;
  const { user, userId: id } = useAuth();
  const [showMessage, setShowMessage] = useState(true);
  const [tabActive, setTabActive] = useState(0);
  // const [user, setUser] = useState(null);
  //const { accessToken } = useAuth();

  // useFocusEffect(
  //   useCallback(() => {
  //     (async () => {
  //       try {
  //         const response = await userController.me(accessToken);
  //         navigation.setOptions({ title: response.first_name });
  //         setUser(response);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     })();
  //   }, [])
  // );

  if (!user) return null;

  return (
    <ScrollView style={{ flex: 1, marginTop: 60 }}>
      {/* <View style={styles.container}> */}
      {/* <View style={styles.control}> */}

      <MyIconBack
        autoFocus={showMessage ? false : true}
        name={"axis-z-rotate-clockwise"}
        type={"material-community"}
        size={30}
        // onPress={() => navigation.replace("ContainerChat")}
        onPress={() => navigation.goBack()}
        color={"#2E86C1"}
      />

      {/* </View> */}
      <Account.Header avatar={user.avatar} username={user.username} />
      <Account.Follows idUser={user.id} username={user.username} />
      <Account.Settings instagram={user.instagram} />
      {/* <Account.Info description={user.description} website={user.website} /> */}

      {/* <Tab
        value={tabActive}
        onChange={(e) => setTabActive(e)}
        indicatorStyle={styles.tabIndicator}
      >
        <Tab.Item
          containerStyle={styles.tabItemContainer}
          icon={{ type: "material-community", name: "grid" }}
        />
        <Tab.Item
          containerStyle={styles.tabItemContainer}
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
      {/* </View> */}
    </ScrollView>
  );
}

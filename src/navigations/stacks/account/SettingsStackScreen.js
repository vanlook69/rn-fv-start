import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InfoUser from "@components/account/infoUser/InfoUser";
import ViewPhoto from "@screens/account/ViewPhoto";
import EditUser from "@screens/account/EditUser";
import ProfileSeven from "@screens/account/ProfileSeven";
import Setting from "@screens/account/Setting";

//import LoginForm from "../../../screens/account/LoginForm";
//import Location from "../../../screens/GoogleMap/Map_word";

export default function SettingsStackScreen() {
  const SettingsStack = createNativeStackNavigator();
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="InfoUser"
        component={InfoUser}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name="EditUser"
        component={EditUser}
        options={{ title: "Edit User", presentation: "modal" }}
      />
      <SettingsStack.Screen
        name="ProfileSeven"
        component={ProfileSeven}
        options={{ title: "Profile Seven", presentation: "modal" }}
      />
      <SettingsStack.Screen
        name="Setting"
        component={Setting}
        options={{ title: "Setting", presentation: "modal" }}
      />
      <SettingsStack.Screen
        name="ViewPhoto"
        component={ViewPhoto}
        options={{ title: "View Photo", presentation: "modal" }}
      />
      {/* <SettingsStack.Screen
        name="loginForm"
        component={LoginForm}
        options={{ title: "Login", headerShown: false }}
      /> */}
      {/* <SettingsStack.Screen
        name="Location"
        component={Location}
        options={{ title: "Location", presentation: "modal" }}
      /> */}
      {/* <SettingsStack.Screen name="Settings2" component={SettingsScreen2} /> */}
    </SettingsStack.Navigator>
  );
}

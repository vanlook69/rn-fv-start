import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import { ChatStackScreen } from "../stacks/Chats/ChatStackScreen";
import { GroupStackScreen } from "../stacks/Groups/GroupStackScreen";
// import ChannelStackScreen from "../stacks/channel/ChannelStackScreen";
// import UniverseStackScreen from "../stacks/universe/UniverseStackScreen";
import SettingsStackScreen from "../stacks/account/SettingsStackScreen";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  let total = 25;
  return (
    <Tab.Navigator
      initialRouteName="SettingsStackScreen"
      // screenOptions={{ headerShown: false }}
      // tabBarOptions={{
      //   inactiveTintColor: "#646464",
      //   activeTintColor: "#F4511E",
      // }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
        tabBarActiveTintColor: "#F4511E",
        tabBarInactiveTintColor: "#646464",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="ChatStackScreen"
        component={ChatStackScreen}
        options={{ title: "Chat", tabBarBadge: total, headerShown: false }}
      />
      <Tab.Screen
        name="GroupStackScreen"
        component={GroupStackScreen}
        options={{ title: "Groups" }}
      />
      <Tab.Screen
        name="account"
        component={SettingsStackScreen}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "ChatStackScreen":
      iconName = "chat";
      break;
    case "GroupStackScreen":
      iconName = "account-group-outline";
      break;
    case "account":
      iconName = "cog-sync-outline";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

//import World from "../screens/World";
// import ChannelStackScreen from "../stack/channel/ChannelStackScreen";
// import UniverseStackScreen from "../stack/universe/UniverseStackScreen";
// import SettingsStackScreen from "../stack/account/SettingsStackScreen";

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
        name="screen.app.tab"
        component={ChannelStackScreen}
        options={{ title: "World", tabBarBadge: total, headerShown: false }}
      />
      {/* 
      <Tab.Screen
        name="ChannelStackScreen"
        component={ChannelStackScreen}
        options={{ title: "World", tabBarBadge: total, headerShown: false }}
      />
      <Tab.Screen
        name="UniverseStackScreen"
        component={UniverseStackScreen}
        options={{ title: "Universe" }}
      />
      <Tab.Screen
        name="account"
        component={SettingsStackScreen}
        options={{ title: "Account" }}
      /> */}
    </Tab.Navigator>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "ChannelStackScreen":
      // iconName = "compass-outline";
      //compass-outline
      iconName = "earth";
      break;
    case "UniverseStackScreen":
      iconName = "web";
      //iconName = "magnify";
      break;
    case "account":
      iconName = "cog-sync-outline";
      //  iconName = "home-outline";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ChatsNavigation,
  GroupsNavigation,
  SettingsNavigation,
} from "../stacks";
import { screens } from "../../utils";
import { styles } from "./BottomTabNavigation.styles";

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: "#F4511E",
        tabBarActiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenIcon(route, color, size),
      })}

      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ color }) => screenOptions(route, color),
      //   tabBarActiveTintColor: "#F4511E",
      //   tabBarInactiveTintColor: "#646464",
      //   headerShown: false,
      // })}
    >
      <Tab.Screen
        name={screens.tab.chats.root}
        component={ChatsNavigation}
        options={{ title: "Chats" }}
      />
      <Tab.Screen
        name={screens.tab.groups.root}
        component={GroupsNavigation}
        options={{ title: "Groups" }}
      />
      <Tab.Screen
        name={screens.tab.settings.root}
        component={SettingsNavigation}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
}

function screenIcon(route, color, size) {
  let iconName;

  if (route.name === screens.tab.chats.root) {
    iconName = "chat";
  }
  if (route.name === screens.tab.groups.root) {
    iconName = "account-group";
  }
  if (route.name === screens.tab.settings.root) {
    iconName = "cog-outline";
  }

  return (
    <Icon
      as={MaterialCommunityIcons}
      name={iconName}
      color={color}
      size={size}
    />
  );
}

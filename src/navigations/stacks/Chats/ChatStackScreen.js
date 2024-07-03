import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { screens } from "../../../utils";

import {
  ContainerChat,
  ChatScreen,
  ChatsScreen,
  CreateChatScreen,
} from "../../../screens/Chats";

import { FollowersScreen, FollowedsScreen } from "../../../screens/Shared";

import { FriendsScreen } from "../../../screens/Friends/FriendsScreen";
import { AccountScreen } from "../../../screens/account/AccountScreen";
import { UserScreen } from "../../../screens/Shared/UserScreen";
import { SettingsScreen } from "../../../screens/account/SettingsScreen";

export function ChatStackScreen() {
  const ChatStack = createNativeStackNavigator();
  return (
    <ChatStack.Navigator defaultScreenOptions={ContainerChat}>
      <ChatStack.Screen
        name="ContainerChat"
        component={ContainerChat}
        options={{ title: "Container", headerShown: false }}
      />
      <ChatStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ title: "Chat", headerShown: true }}
      />
      <ChatStack.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{ title: "Chats", headerShown: true }}
      />
      <ChatStack.Screen
        name="CreateChatScreen"
        component={CreateChatScreen}
        options={{ title: "Crear Chat", headerShown: false }}
      />
      <ChatStack.Screen
        name="FriendsScreen"
        component={FriendsScreen}
        options={{ title: "Friends", headerShown: false }}
      />
      <ChatStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ title: "AccountScreen", headerShown: false }}
      />
      <ChatStack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ title: "UserScreen", headerShown: false }}
      />

      {/* <ChatStack.Screen
        name={screens.account.SettingsScreen}
        component={SettingsScreen}
        options={{ title: "Ajustes" }}
      /> */}

      <ChatStack.Group screenOptions={{ presentation: "modal" }}>
        {/* <ChatStack.Screen
          name="FollowedsScreen"
          component={FollowedsScreen}
          options={{ title: "FollowedsScreen", headerShown: false }}
        /> */}
        <ChatStack.Screen
          name={screens.app.followeds}
          component={FollowedsScreen}
          options={{ title: "FollowedsScreen", headerShown: false }}
        />
        <ChatStack.Screen
          name={screens.app.followers}
          component={FollowersScreen}
          options={{ title: "FollowersScreen", headerShown: false }}
        />

        {/* <ChatStack.Screen
          name={screens.aco}
          component={SettingsScreen}
          options={{ title: "Ajustes", headerShown: true }}
        /> */}

        {/* <ChatStack.Screen
          name="FollowersScreen"
          component={FollowersScreen}
          options={{ title: "FollowersScreen", headerShown: false }}
        /> */}

        {/* <ChatStack.Screen
        name={FollowersScreen}
        component={FollowersScreen}
        options={{ headerShown: false }}
      /> */}
        {/* <ChatStack.Screen
        name={FollowedsScreen}
        component={FollowedsScreen}
        options={{ headerShown: false }}
      /> */}
      </ChatStack.Group>
    </ChatStack.Navigator>
  );
}

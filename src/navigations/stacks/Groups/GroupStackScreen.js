import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  ChangeNameGroupScreen,
  GroupProfileScreen,
  AddUserGroupScreen,
  CreateGroupScreen,
  GroupScreen,
  GroupsScreen,
} from "../../../screens/Groups";

export function GroupStackScreen() {
  const GroupStack = createNativeStackNavigator();
  return (
    <GroupStack.Navigator>
      <GroupStack.Screen
        name="ChangeNameGroupScreen"
        component={ChangeNameGroupScreen}
        options={{ title: "ChangeNameGroupScreen", headerShown: true }}
      />
      <GroupStack.Screen
        name="GroupProfileScreen"
        component={GroupProfileScreen}
        options={{ title: "GroupProfileScreen", headerShown: true }}
      />
      <GroupStack.Screen
        name="AddUserGroupScreen"
        component={AddUserGroupScreen}
        options={{ title: "AddUserGroupScreen", headerShown: true }}
      />
      <GroupStack.Screen
        name="CreateGroupScreen"
        component={CreateGroupScreen}
        options={{ title: "CreateGroupScreen", headerShown: true }}
      />
      <GroupStack.Screen
        name="GroupScreen"
        component={GroupScreen}
        options={{ title: "GroupScreen", headerShown: true }}
      />
      <GroupStack.Screen
        name="GroupsScreen"
        component={GroupsScreen}
        options={{ title: "GroupsScreen", headerShown: true }}
      />
    </GroupStack.Navigator>
  );
}

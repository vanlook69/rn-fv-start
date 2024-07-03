import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import World from "../../../screens/World";
import Wall from "@screens/channel/Wall";
import Reel from "@screens/channel/Reel";
//import Carousel from "../../../screens/channel/Carousel";
// import Pet from "../../../screens/pet/Pet";
// import Pets from "../../../screens/pet/Pets";
//import AddPet from "../../../components/pet/AddPet";

// import CreateUserScreen from "../../../screens/userslist/CreateUserScreen";
// import UserDetailScreen from "../../../screens/userslist/UserDetailScreen";
// import UsersList from "../../../screens/userslist/UsersList";

export default function SettingsStackScreen() {
  const ChannelStack = createNativeStackNavigator();
  return (
    <ChannelStack.Navigator>
      {/* <ChannelStack.Screen
        name="world"
        component={World}
        options={{ headerShown: false }}
      /> */}
      <ChannelStack.Screen
        name="Wall"
        component={Wall}
        options={{ title: "Wall", headerShown: true }}
      />
      <ChannelStack.Screen
        name="Reel"
        component={Reel}
        options={{ title: "Reel", headerShown: true }}
      />
      {/* <ChannelStack.Screen
        name="Carousel"
        component={Carousel}
        options={{ title: "Carousel", headerShown: true }}
      /> */}
      {/* <ChannelStack.Screen
        name="Pet"
        component={Pet}
        options={{ title: "Pet", headerShown: true }}
      /> */}
      {/* <ChannelStack.Screen
        name="Pets"
        component={Pets}
        options={{ title: "Pets", headerShown: true }}
      /> */}
      {/* <ChannelStack.Screen
        name="UsersList"
        component={UsersList}
        options={{ title: "Users List" }}
      /> */}
      {/* <ChannelStack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "Create a New User" }}
      /> */}
      {/* <ChannelStack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "User Detail" }}
      /> */}
    </ChannelStack.Navigator>
  );
}

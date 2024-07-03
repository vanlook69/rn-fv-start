import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import HomeChat from "../../screens/HomeChat";
import Call from "@screens/contact/Call";
import Message from "@screens/contact/Message";

export default function SettingsStackScreen() {
  const SettingsStack = createNativeStackNavigator();
  return (
    <SettingsStack.Navigator>
      {/* <SettingsStack.Screen
        name="HomeChat"
        component={HomeChat}
        options={{ headerShown: false }}
      /> */}
      <SettingsStack.Screen
        name="Call"
        component={Call}
        options={{ headerShown: true }}
      />
      <SettingsStack.Screen
        name="Message"
        component={Message}
        options={{ title: "Message", headerShown: true }}
      />
      {/* <SettingsStack.Screen name="Settings2" component={SettingsScreen2} /> */}
    </SettingsStack.Navigator>
  );
}

import React from "react";
//import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterForm from "@screens/account/RegisterForm";
//import LoginForm from "@screens/account/loginForm/";
import LoginForm from "@screens/account/loginForm/LoginForm";
import Navigation from "@navigations/tab/Navigation";
//import GoogleForm from "../screens/account/GoogleForm";

const Stack = createStackNavigator();

export default function NavigationStart() {
  // const config = {
  //   animation: "spring",
  //   config: {
  //     stiffness: 1000,
  //     damping: 500,
  //     mass: 3,
  //     overshootClamping: true,
  //     restDisplacementThreshold: 0.01,
  //     restSpeedThreshold: 0.01,
  //   },
  // };

  return (
    <Stack.Navigator defaultScreenOptions={LoginForm}>
      <Stack.Screen
        name="loginForm"
        component={LoginForm}
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="registerForm"
        component={RegisterForm}
        options={{
          title: "Register",
          headerShown: false,
        }}
        // options={{
        //   title: "Register",
        //   headerShown: false,
        //   transitionSpec: {
        //     open: config,
        //     close: config,
        //   },
        // }}
      />
      <Stack.Screen
        name="navigation"
        component={Navigation}
        options={{ title: "Home", headerShown: false }}
      />
      {/* <Stack.Screen
        name="googleForm"
        component={GoogleForm}
        options={{ title: "Google", headerShown: true }}
      /> */}
    </Stack.Navigator>
  );
}

import React from "react";
//import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import LoginForm from "@screens/account/register/LoginForm";
import { screens } from "@utils";
import { AuthStartScreen, LoginForm, Email, Password } from "@screens/account";

// import Name from "@screens/account/register/Name";
// import Gender from "@screens/account/register/Gender";
// import Birth from "@screens/account/register/Birth";
// import Username from "@screens/account/register/Username";
// import Nickname from "@screens/account/register/Nickname";
// import Register from "@screens/account/register/Register";

//import Navigation from "@navigations/tab/Navigation";

//import GoogleForm from "../screens/account/GoogleForm";

const Stack = createStackNavigator();

export default function NavigationStart() {
  return (
    // <Stack.Navigator defaultScreenOptions={AuthStartScreen}>
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={screens.auth.authStartScreen}
        // name="AuthStartScreen"
        component={AuthStartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.auth.loginForm}
        component={LoginForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.auth.email}
        component={Email}
        options={{ title: "Email", headerShown: false }}
      />
      <Stack.Screen
        name="password"
        component={Password}
        options={{ title: "Password", headerShown: false }}
      />
      {/* <Stack.Screen
        name="name"
        component={Name}
        options={{ title: "Name", headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="gender"
        component={Gender}
        options={{ title: "Gender", headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="birth"
        component={Birth}
        options={{ title: "Birth", headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="username"
        component={Username}
        options={{ title: "Username", headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="nickname"
        component={Nickname}
        options={{ title: "Nickname", headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "Register", headerShown: false }}
      />  */}
      {/* <Stack.Screen
        name="navigation"
        component={Navigation}
        options={{ title: "Home", headerShown: false }}
      /> */}
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

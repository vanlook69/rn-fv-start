import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { store } from "./src/store/store";
import client from "./src/apollo/apollo";
import AuthLoadingScreen from "./src/routes/AuthLoadingScreen";
import NavigationStart from "./src/navigations/stacks/account/NavigationStart.js";
import Navigation from "./src/navigations/tab/Navigation.js";

//import HomeScreen from "./src/screens/prueba/HomeScreen";
//import LoginScreen from "./src/screens/prueba/LoginScreen";
//import { LoginForm } from "./src/screens/account/loginForm/LoginForm";

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="AuthLoading"
              component={AuthLoadingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NavigationStart"
              component={NavigationStart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={Navigation}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
}

export default App;

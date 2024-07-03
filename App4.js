//import React from "react";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
//import { useDispatch } from "react-redux";
import { Provider, useDispatch } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import store from "@redux/store.js";
import client from "./src/apollo/apollo.js";
//import PrivateRoute from "./src/routes/PrivateRoute.js";

import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NavigationStart from "@navigations/stacks/account/NavigationStart.js";
import Navigation from "@navigations/tab/Navigation.js";

function App() {
  //const dispatch = useDispatch();
  const [auth, setAuth] = useState(undefined);
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          {!auth ? <Text>LOGIN</Text> : <Text>LOGOUT</Text>}
          {/* <PrivateRoute /> */}
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}
export default App;

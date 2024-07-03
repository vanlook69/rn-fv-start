import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";

//import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

import store from "@redux/store.js";
import client from "./src/apollo/apollo.js";
//import PrivateRoute from "./src/routes/PrivateRoute.js";

import { userQuery } from "@functions/userQuery";

// import {
//   setAuthenticated,
//   setToken,
//   setUser,
//   resetUser,
// } from "@redux/slices/userSlice.js";

import NavigationStart from "@navigations/stacks/account/NavigationStart.js";
import Navigation from "@navigations/tab/Navigation.js";

function App() {
  // const dispatch = useDispatch();
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      try {
        if (!token) {
          setAuth(null);
          //  dispatch(resetUser());
        } else {
          setAuth(token);

          const user = jwtDecode(token);

          console.log(user);

          // dispatch(setAuthenticated({ isAuthenticated: true }));
          // dispatch(setToken({ token }));
          // dispatch(setUser({ user }));
        }
      } catch (error) {
        console.error("Error fetching token from Storage:", error);
      }
    };

    checkToken();
  }, []);

  if (auth === undefined) return null;

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          {/* {!auth ? <Text>LOGIN</Text> : <Text>LOGOUT</Text>} */}
          {!auth ? <NavigationStart /> : <Navigation />}
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}
export default App;

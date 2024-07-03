import { useState, useEffect } from "react";
import { Text } from "react-native";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { GET_USER } from "@gql/user";

import {
  setAuthenticated,
  setToken,
  setUser,
  resetUser,
} from "@redux/slices/userSlice.js";
//import NavigationStart from "@navigations/NavigationStart";

import NavigationStart from "@navigations/stacks/account/NavigationStart.js";
import Navigation from "@navigations/tab/Navigation.js";

//import { AuthNavigation } from "@navigations/stacks/AuthNavigation";
//import { AppNavigation } from "@navigations/AppNavigation";

const PrivateRoute = () => {
  const [auth, setAuth] = useState(undefined);
  const dispatch = useDispatch();

  // const getUser = async (id) => {
  //   const { loading, error, data } = useQuery(GET_USER, {
  //     variables: { id },
  //   });
  //   return data;
  // };

  useEffect(() => {
    //const checkToken = async () => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      // console.log("SI o NO: ", token);
      // const token = null;
      try {
        if (!token) {
          //  console.log("1T:");
          setAuth(null);
          dispatch(resetUser());
        } else {
          //  console.log("2T:");
          setAuth(token);
          const user = jwtDecode(token);

          dispatch(setAuthenticated({ isAuthenticated: true }));
          dispatch(setToken({ token }));
          dispatch(setUser({ user }));
          // console.log("TOOO: ", user);
          // const { user_id: id } = jwtDecode(token);
          // console.log("TOKEN: ", token);
          // console.log("USER: ", user);
          // const user = getUser(id);

          // console.log(user);

          // const { loading, error, data } = useQuery(GET_USER, {
          //   variables: { id },
          // });
          // const { getUser } = data;

          // dispatch(
          //   setAuthenticated({
          //     isAuthenticated: true,
          //     token,
          //     user,
          //   })
          // );
        }
      } catch (error) {
        console.error("Error fetching token from Storage:", error);
      }
    })();
    // };

    // checkToken();
    // }, [auth]);
  }, []);

  if (auth === undefined) return null;

  return !auth ? <NavigationStart /> : <Navigation />;
  // return !auth ? <Text>Login...</Text> : <Text>Logueado...</Text>;
  // return !auth ? <NavigationStart /> : <Text>Logueado...</Text>;
  //return !auth ? <NavigationStart /> : <Navigation />;
};

export default PrivateRoute;

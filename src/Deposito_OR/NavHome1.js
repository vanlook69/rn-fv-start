import { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setAuthenticated, resetUser } from "../redux/slices/userSlice.js";
import HeaderOne from "../components/headers/headerOne/HeaderOne.js";
//import jwtDecode from "jwt-decode";

//import { useApolloClient } from "@apollo/client";
// import { decodeToken, removeToken } from "../utils/token";
//import MyButtonCircle from "../components/myComponents/botton/myButtonCirclemyButtonCircle";

export default function NavHome() {
  const dispatch = useDispatch();
  //const userState = useSelector((store) => store.user);
  const { isAuthenticated, token, user } = useSelector((state) => state.user);
  const navigation = useNavigation();

  //console.log("isAuth: ", isAuthenticated);
  //console.log("isUser: ", user.username);

  // useEffect(() => {
  //
  //   // Decodifica el token cuando cambia o al cargar el componente
  //   if (token) {
  //     console.log("Home: ", token);
  //     const decoded = jwtDecode(token);
  //     // console.log("decoded: ", decoded);
  //     // setAuthenticated({ user: decoded });
  //   }
  // }, []);

  const clearStorage = async () => {
    //  console.log("clearStorage1: ", JSON.stringify(userState));
    try {
      // dispatch(resetUser());
      dispatch(
        setAuthenticated({ isAuthenticated: false, token: null, user: null })
      );
      // console.log("clearStorage2: ", JSON.stringify(userState));

      await AsyncStorage.removeItem("token");
      // await AsyncStorage.clear("token");
      navigation.navigate("loginForm");
      //alert("¡Almacenamiento borrado exitosamente!");
    } catch (e) {
      // console.log("clearStorage3: ", JSON.stringify(userState));
      // console.log(e);
      alert("No se pudo borrar el almacenamiento asíncrono.");
    }
  };

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <View>
          {/* <HeaderOne headerText={"Hi, "} headerIcon={"bell-o"} /> */}
          <Text>Bienvenido a la aplicación protegida</Text>
          <Text>Name: {user.name}</Text>
          <Text>UserName: {user.username}</Text>
          <Text>Email: {user.email}</Text>
          <Button
            onPress={clearStorage}
            title="Cerrar sesión"
            color="#841584"
          />
        </View>
      ) : (
        <Text>No estás autenticado</Text>
      )}

      {/* <Text>El state del user es: {JSON.stringify(userState)}</Text> */}
      {/* <Text>Name: {fin.name}</Text>
      <Text>User: {fin.username}</Text>
      <Text>Email: {fin.email}</Text> */}
      {/* <Button onPress={clearStorage} title="Cerrar sesión" color="#841584" /> */}

      {/* <MyButtonCircle
        type={"material-community"}
        name={"collapse-all-outline"}
        size={24}
        color={"#008080"}
        //color={"#00FF00"}
        onPress={() => onLogout()}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    backgroundColor: "#00FF00",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

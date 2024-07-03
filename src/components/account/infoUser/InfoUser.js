import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Alert, TouchableOpacity } from "react-native";
//import { useQuery } from "@apollo/client";
//import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Icon } from "react-native-elements";
//import { Entypo } from "@expo/vector-icons";
//import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

//import { GET_USER } from "@gql/user";
import { useAuth } from "@hooks/useAuth";
import { logoutUser } from "../../../store/slices/authSlice";
// import {
//   setAuthenticated,
//   setUser,
//   resetUser,
// } from "@redux/slices/userSlice.js";

import { screens } from "@utils";

import colors from "@utils/constants/colors";
import COLORS from "@utils/constants/colors2";
import Loading from "../../Loading";
import MyButtonCircle from "@components/myComponents/botton/myButtonCircle";

//import { useRandom } from "../../../hooks/querys/useRandom";

//import { userQuery } from "@functions/userQuery";

//import NavigationStart from "../../navigations/NavigationStart.js";

//import firebaseApp from "../../utils/firebase";
// import { getAuth, updateProfile } from "firebase/auth";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
//const auth = getAuth(firebaseApp);
//const user = auth.currentUser;

//import { AuthenticatedUserContext } from "../../context/AuthUser/AuthUser";

//import { async } from "@firebase/util";

export default function InfoUser({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [loadingTex, setLoadingTex] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  //const client = userApolloClient();

  const dispatch = useDispatch();

  //const getUser = useRandom();
  // console.log("useQuery: ", getUser);

  //const { user } = useSelector((state) => state.user.user);
  const { user } = useAuth();

  //console.log("Useinfo: ", user.user_id);
  //console.log("userId: ", id);

  // const {
  //   data,
  //   loading: load,
  //   error,
  // } = useQuery(GET_USER, {
  //   variables: { id },
  // });

  // if (load || error) return null;

  // const { getUser } = data;
  // //console.log("getUser: ", getUser);
  // dispatch(
  //   setUser({
  //     user: getUser,
  //   })
  // );

  // const getUser = () => {
  //   console.log("userId: ", id);
  //   const { error, data } = useQuery(GET_USER, {
  //     variables: { id },
  //     // onCompleted: (getUser) => {
  //     //   // dispatch(
  //     //   //   setUser({
  //     //   //     user: user.getUser,
  //     //   //   })
  //     //   // );
  //     //   // console.log("DATA: ", user.getUser);
  //     // },
  //   });
  // };

  // useEffect(() => {
  //   console.log("userQuery: ");
  //   userQuery();
  // }, []);
  // console.log("isAuthenticated: ", isAuthenticated);
  // console.log("Token: ", token);
  // console.log("user: ", user);

  // const { user, logout } = useContext(AuthenticatedUserContext);
  // const { uid, photoURL, displayName, email } = user;

  //const { uid, photoURL, displayName, email } = auth.currentUser;
  //const [avatar, setAvatar] = useState(user.avatar);

  //const navigation = useNavigation();

  // const { uid, photoURL, displayName, email } = user;

  //const navigation = useNavigation();

  // const revokeAccess = () => {
  //   const newUser = {
  //     uid: "",
  //     displayName: "",
  //     email: "",
  //     photoURL: "",
  //   };
  // };

  const changeAvatar = async () => {
    console.log("changeAvatar");
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
    if (hasPermission === "denied") {
      alert("Es necesario aceptar los permisos de la galeria");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        //quality: 1,
      });
      if (result.cancelled) {
        // alert("Has cerrado la seleccion de imagenes.");
      } else {
        uploadImage(result.uri)
          .then(() => {
            updatePhotoUrl();
            // alert("La imagen fue actualizada con éxito...");
          })
          .catch((err) => {
            console.log(err);
            alert("Error al actualizar el avatar.");
          });
      }
    }
  };

  // const uploadImage = async (uri) => {
  //   setLoadingTex("Actualizando Avatar");
  //   setLoading(true);

  //   const response = await fetch(uri);
  //   const blob = await response.blob();

  //   const storage = getStorage();
  //   const storageRef = ref(storage, `users/avatar/${uid}`);

  //   uploadBytes(storageRef, blob).then((snapshot) => {
  //     updatePhotoUrl(snapshot.metadata.fullPath);
  //   });

  //   setLoading(false);
  //   const ref = storage().ref().child(`users/avatar/${uid}`);
  //   return ref.put(blob);
  // };

  // const updatePhotoUrl = async (imagePath) => {
  //   const storage = getStorage();
  //   const imageRef = ref(storage, imagePath);

  //   const imageUrl = await getDownloadURL(imageRef);
  //   //console.log(imageUrl);

  //   const auth = getAuth();
  //   updateProfile(auth.currentUser, { photoURL: imageUrl });

  //   setAvatar(imageUrl);
  //   setLoading(false);

  //   // storage().ref(`users/avatar/${uid}`),
  //   //   getDownloadURL()
  //   //     .then(async (response) => {
  //   //       const update = {
  //   //         photoURL: response,
  //   //       };
  //   //       await user.updateProfile(update);

  //   //       // const newUser = {
  //   //       //   uid,
  //   //       //   displayName,
  //   //       //   email,
  //   //       //   photoURL,
  //   //       // };
  //   //       setLoading(false);
  //   //     })
  //   //     .catch(() => {
  //   //       alert("Error al actualizar el avatar.");
  //   //     });
  // };

  const clearStorage = async () => {
    Alert.alert("Cerrar sesión", "Desea cerrar la sesión?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          try {
            dispatch(logoutUser());
            navigation.replace("NavigationStart");
            // console.log("3");
            //dispatch(resetUser());
            // navigation.replace(screens.auth.authStartScreen);
            // AsyncStorage.removeItem("token");
            // dispatch(resetUser());
            //  console.log(screens.auth.authStartScreen);

            // navigation.replace("AuthStartScreen");
            //  navigation.push("loginForm");
          } catch (error) {
            console.log("No se pudo borrar el almacenamiento asíncrono.");
          }
        },
      },
    ]);

    //  console.log("clearStorage1: ", JSON.stringify(userState));
    // try {
    //   dispatch(resetUser());
    //   // dispatch(
    //   //   setAuthenticated({ isAuthenticated: false, token: null, user: null })
    //   // );
    //   // console.log("clearStorage2: ", JSON.stringify(userState));

    //   await AsyncStorage.removeItem("token");
    //   // await AsyncStorage.clear("token");
    //   navigation.push("loginForm");
    //   //alert("¡Almacenamiento borrado exitosamente!");
    // } catch (e) {
    //   // console.log("clearStorage3: ", JSON.stringify(userState));
    //   console.log("No se pudo borrar el almacenamiento asíncrono.");
    //   // alert("No se pudo borrar el almacenamiento asíncrono.");
    // }
  };

  return (
    <>
      <View style={styles.viewUserInfo}>
        <View style={styles.headAvatar}>
          <View style={styles.photoV}>
            <Avatar
              rounded
              size="large"
              showEditButton
              onPress={changeAvatar}
              containerStyle={styles.userInfoAvatar}
              //containerStyle={styles.chatButton}
              // source={
              //   photoURL
              //     ? { uri: avatar }
              //     : require("../../assets/img/avatar-default.jpg")
              // }
              title="XR"
              // containerStyle={{ backgroundColor: "grey" }}
            >
              <Avatar.Accessory size={23} />
            </Avatar>

            <TouchableOpacity
              onPress={() => navigation.navigate("ViewPhoto")}
              style={styles.chatButton}
            >
              <Icon
                type="material-community"
                name="account-box-multiple-outline"
                size={20}
                color="grey"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          {user ? (
            <View>
              {/* <HeaderOne headerText={"Hi, "} headerIcon={"bell-o"} /> */}
              {/* <Text>Bienvenido a la aplicación protegida</Text> */}

              <Text>Name: {user.name ? user.name : "Anónimo"}</Text>
              <Text>
                UserName: {user.username ? user.username : "XZXZXZXZ"}
              </Text>
              <Text>Email: {user.email ? user.email : "Socia Login"}</Text>

              {/* <Button
                onPress={clearStorage}
                title="Cerrar sesión"
                color="#841584"
              /> */}
            </View>
          ) : (
            <Text></Text>
          )}

          {/* <Text style={styles.displayName}>
            {user.name ? user.name : "Anónimo"}
          </Text>
          <Text style={styles.displayEmail}>
            {user.email ? user.email : "Socia Login"}
          </Text> */}
        </View>

        <View style={styles.EditContainer}>
          <MyButtonCircle
            type={"material-community"}
            name={"account-edit-outline"}
            size={24}
            color={"#E53935"}
            onPress={() => navigation.navigate("EditUser")}
          />

          <MyButtonCircle
            type={"material-community"}
            name={"collapse-all-outline"}
            size={24}
            color={"#E53935"}
            onPress={() => navigation.navigate("ProfileSeven")}
          />

          <MyButtonCircle
            type={"material-community"}
            name={"cogs"}
            size={24}
            color={"#E53935"}
            //onPress={() => getUser()}
            onPress={() => navigation.navigate("Setting")}
          />
        </View>
      </View>
      <View style={styles.viewClose1}>
        {/* <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={styles.chatButton}
        >
          <Icon type="material-community" name="power" size={24} color="grey" />
        </TouchableOpacity> */}

        <MyButtonCircle
          //title="Cerrar"
          type={"material-community"}
          name={"power"}
          size={24}
          color={"grey"}
          onPress={() => {
            clearStorage();
          }}
        />

        {/* /> */}
        <Loading isVisible={loading} text={loadingTex} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    flex: 1,
    // alignItems: "flex-start",
    alignItems: "center",
    justifyContent: "flex-start",
    //justifyContent: "center",
    //flexDirection: "row",
    //backgroundColor: "#f2f2f2",
    backgroundColor: "#f2f2f2",
    //backgroundColor: "red",
    paddingTop: 50,
    paddingBottom: 30,
  },
  headAvatar: {
    marginTop: 5,
    // marginBottom: 10,
    padding: 10,
    // backgroundColor: COLORS.secondary,
    width: "100%",
    // alignItems: "flex-start",
    alignItems: "center",
    //top: 20,
    elevation: 10,
    //flexDirection: "row",
  },
  photoV: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  detailsContainer: {
    marginTop: 15,
    height: 150,
    width: "65%",
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    //flex: 1,
    bottom: 1,
    borderRadius: 18,
    //elevation: 10,
    padding: 20,
    //justifyContent: "center",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 20,
  },
  EditContainer: {
    marginTop: 20,
    height: 60,
    width: "60%",
    //alignItems: "center",
    justifyContent: "center",

    //backgroundColor: COLORS.white,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  viewClose1: {
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingBottom: 20,
  },
  chatButton: {
    backgroundColor: colors.lightGray,
    // backgroundColor: colors.gray,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 20,
  },
  viewClose: {
    //backgroundColor: "#f2f2f2",
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    borderRadius: 25,
    //alignItems: "center",
    // paddingBottom: 20,
    // justifyContent: "center",
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    // marginRight: 20,
    // marginBottom: 20,
  },
  userInfoAvatar1: {
    marginRight: 20,
  },
  userInfoAvatar: {
    marginRight: 20,

    borderTopWidth: 1,
    borderTopColor: "red",
    borderBottomWidth: 1,
    borderBottomColor: "blue",

    borderLeftWidth: 1,
    borderLeftColor: "orange",
    borderRightWidth: 1,
    borderRightColor: "purple",
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
  displayEmail: {
    color: "#5DADE2",
    textDecorationLine: "underline",
  },
});

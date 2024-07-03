import React, { useState, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
//import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

//import Colors from "../../utils/colors/colors";
//import COLORS from "../../utils/colors/colors";

import Title from "../../../components/Title";
import MyButtonCircle from "../../../components/button/myButtonCircle";

//import firebaseApp from "../../utils/firebase";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
//const auth = getAuth(firebaseApp);
//const user = auth.currentUser;

import { AuthenticatedUserContext } from "../../../context/AuthUser/AuthUser";

//import * as Permissions from "expo-permissions";

import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

import Loading from "../../../components/Loading";
import { async } from "@firebase/util";

export default function InfoUser() {
  const [loading, setLoading] = useState(false);
  const [loadingTex, setLoadingTex] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const { user, userFull, logout } = useContext(AuthenticatedUserContext);
  const { uid, photoURL, displayName, email } = user;
  const { birth } = userFull;
  // const vbirth = new Date(birth.seconds * 1000);
  //console.log("xxx", vbirth);
  let idioms = "en";
  let show = false;
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // let vname = month[vbirth.getMonth()];

  //const { uid, photoURL, displayName, email } = auth.currentUser;
  const [avatar, setAvatar] = useState(photoURL);

  const navigation = useNavigation();

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
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");

    if (hasPermission === "denied") {
      alert("Es necesario aceptar los permisos de la galeria");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
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

  const uploadImage = async (uri) => {
    setLoadingTex("Actualizando Avatar");
    setLoading(true);

    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `users/avatar/${uid}`);
    //const storageRef = storage().ref().child(`users/avatar/${uid}`);

    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotoUrl(snapshot.metadata.fullPath);
    });

    setLoading(false);
    // const ref = storage().ref().child(`users/avatar/${uid}`);
    // return ref.put(blob);
  };

  const updatePhotoUrl = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);

    const imageUrl = await getDownloadURL(imageRef);
    //console.log(imageUrl);

    const auth = getAuth();
    updateProfile(auth.currentUser, { photoURL: imageUrl });

    setAvatar(imageUrl);
    setLoading(false);

    // storage().ref(`users/avatar/${uid}`),
    //   getDownloadURL()
    //     .then(async (response) => {
    //       const update = {
    //         photoURL: response,
    //       };
    //       await user.updateProfile(update);

    //       // const newUser = {
    //       //   uid,
    //       //   displayName,
    //       //   email,
    //       //   photoURL,
    //       // };
    //       setLoading(false);
    //     })
    //     .catch(() => {
    //       alert("Error al actualizar el avatar.");
    //     });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Title title={"FeedVBack"} subtitle={"Perfil"} />
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
              source={
                photoURL
                  ? { uri: avatar }
                  : require("../../../../assets/img/avatar-default.jpg")
              }
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
          <Text style={styles.displayName}>
            {displayName ? displayName : "Anónimo"}
          </Text>
          <Text style={styles.displayEmail}>
            {email ? email : "Socia Login"}
          </Text>
          <Text style={styles.text}>Username: {userFull.username}</Text>
          <Text style={styles.text}>Nickname: {userFull.nickname}</Text>
          <Text style={styles.text}>Gender: {userFull.gender}</Text>
          {show ? (
            <Text style={styles.text}>
              {/* Birth: {vname}, {vbirth.getDate()} */}
            </Text>
          ) : (
            <Text style={styles.text}>
              {/* Birth: {vname}, {vbirth.getDate()} - {vbirth.getUTCFullYear()}. */}
              {/* Birth: {name}, {vbirth.getDate()} - {vbirth.getUTCFullYear()}. */}
            </Text>
          )}

          <Text style={styles.text}>Age: {userFull.age}</Text>
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
            logout();
          }}
        />

        {/* /> */}
        <Loading isVisible={loading} text={loadingTex} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    flex: 1,
    // alignItems: "flex-start",
    alignItems: "center",
    // justifyContent: "flex-start",
    //justifyContent: "center",
    //flexDirection: "row",
    //backgroundColor: "#f2f2f2",
    //backgroundColor: "#f2f2f2",
    //backgroundColor: "red",
    // paddingTop: 50,
    paddingBottom: 30,
  },
  headAvatar: {
    marginTop: 5,
    // marginBottom: 10,
    padding: 10,
    //backgroundColor: "red",
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
    marginTop: 25,
    // height: 170,
    width: "80%",
    backgroundColor: "white",
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
    // backgroundColor: "#f2f2f2",
    paddingBottom: 20,
  },
  chatButton: {
    backgroundColor: "#FAFAFA",
    // backgroundColor: colors.gray,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "gray",
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
    height: 200,
    width: 200,
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
    fontSize: 18,
    // paddingBottom: 3,
    fontFamily: "Futura",

    fontWeight: "bold",
    paddingBottom: 5,
  },
  displayEmail: {
    color: "#5DADE2",
    fontSize: 16,
    fontFamily: "Futura",
    textDecorationLine: "underline",
  },
  text: {
    fontSize: 16,
    fontFamily: "Futura",
  },
});

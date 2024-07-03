import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import firebaseApp from "../../utils/database/firebase";
const db = getFirestore(firebaseApp);

import Title from "../../components/Title";
import MyInput from "../../components/input/MyInputIcon";
import MyIcon from "../../components/icons/MyIcon";
import MyButtonCircle from "../../components/button/myButtonCircle";

import { AuthenticatedUserContext } from "../../context/AuthUser/AuthUser";

export default function Username() {
  const [username, setUsername] = useState("");
  const [showMessage, setShowMessage] = useState(true);

  const { xUserName } = useContext(AuthenticatedUserContext);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    //console.log(username);
    if (username === "") {
      Alert.alert("feedvback", "El campo es obligatorio...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else {
      const q = query(
        collection(db, "username_c"),
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size == 0) {
        xUserName(username);
        navigation.navigate("Nickname");
      } else {
        Alert.alert("feedvback", `Username: "${username}" no disponible...`, [
          {
            text: "OK",
            onPress: () => {},
          },
        ]);
      }
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      //   if (doc.id) {
      //     console.log("Si existe");
      //   } else {
      //     console.log("No such document");
      //   }
      // });

      // const docRef = doc(db, "username", username);
      // const snap = await getDoc(docRef);
      // const snap = await getDoc(doc(db, "username", "luma99"));

      // if (snap.exists()) {
      //   console.log(snap.data());
      // } else {
      //   console.log("No such document");
      // }

      // const usuarioBBDD = await getDoc(doc(db, "username", username ));
      // // const docRef = doc(db, "username", username);
      // // const usuarioBBDD = await getDoc(docRef);
      // console.log(usuarioBBDD.data());
      // if (!usuarioBBDD.exists()) {
      //   Alert.alert("feedvback", "Username no disponible...", [
      //     {
      //       text: "OK",
      //       onPress: () => {},
      //     },
      //   ]);
      // } else {
      //   xUserName(username);
      //   //navigation.navigate("Nickname");
      //   console.log("No existe el usuario");
      //   console.log(usuarioBBDD);
      //   //Entiendo que aqui va el código para asignar el mail e imagen
      // }
    }
  };

  const onMessage = () => {
    setShowMessage(false);
    Alert.alert(
      "feedvback",
      "Username es un campo obligatorio: Debes ingresar un username, ya que con el mismo nos comunicaremos contigo por cualquir duda o percace",
      [
        {
          text: "OK",
          onPress: () => {
            setShowMessage(true);
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Title title={"FeedVBack"} subtitle={"Ingresa tu usuario"} />
      <View style={styles.Container}>
        <View style={styles.Container3}>
          <View style={styles.EditContainer}>
            <MyIcon
              autoFocus={showMessage ? false : true}
              name={"star-outline"}
              type={"material-community"}
              size={20}
              onPress={() => onMessage()}
              color={"#FF5722"}
            />
            <View style={styles.passwordContainer}>
              <MyInput
                autoFocus={true}
                autoCapitalize="none"
                autoCorrect={false}
                autlabeloCorrect={false}
                // onkeyup={lowerCase}
                label={"Username..."}
                onChangeText={setUsername}
                value={username}
              />
              <MyIcon
                name={"account-outline"}
                type={"material-community"}
                size={20}
                onPress={() => onMessage()}
                color={showMessage ? "#FF5722" : "#c1c1c1"}
              />
            </View>
          </View>

          <View style={styles.EditContainer2}>
            {/* <MyButtonCircle
              name={"transfer-left"}
              type={"material-community"}
              size={24}
              color={"#66CC99"}
              onPress={() => navigation.navigate("Birth")}
            /> */}
            <MyButtonCircle
              name={"transfer-right"}
              type={"material-community"}
              size={24}
              color={"#66CC99"}
              onPress={() => handleSubmit()}
            />
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <CreateAccount />
        </View>
      </View>
    </SafeAreaView>
  );

  function CreateAccount() {
    const navigation = useNavigation();

    return (
      <View style={styles.Container4}>
        <Text
          style={styles.register}
          onPress={() => navigation.navigate("LoginForm")}
        >
          ¿Ya tienes una cuenta?{" "}
          <Text style={styles.btnRegister}>Iniciar Sesión.</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    //height: "100%",
    //padding: 6,
    //alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    //backgroundColor: "lime",
  },
  font: {
    fontFamily: "Italianno",
    fontSize: 65,
    color: "#5D6D7E",
    fontWeight: "bold",
  },
  title: {
    fontFamily: "Regular",
    fontSize: 60,
    color: "blue",
  },
  subtitle: {
    fontFamily: "Regular",
    height: 60,
    fontSize: 35,
    color: "grey",
  },
  Container2: {
    flex: 2,
    //height: "100%",
    //padding: 6,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "white",
    backgroundColor: "#fff",
  },
  Container3: {
    flex: 5,
    //height: "100%",
    //padding: 6,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "white",
    backgroundColor: "#fff",
  },
  Container4: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  EditContainer: {
    //flexDirection: "row",
    marginTop: 25,
    height: 60,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    backgroundColor: "#fff",
  },
  EditContainer2: {
    flexDirection: "row",
    marginTop: 15,
    //padding: 6,
    height: 60,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    // marginHorizontal: 15,
  },

  // titulo: {
  //   textAlign: "center",
  //   marginBottom: 30,
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   color: "#757575",
  // },
  input: {
    width: "100%",
    marginTop: 5,
  },
  textRegister: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#82B1FF",
    fontWeight: "bold",
  },

  passwordContainer: {
    flexDirection: "row",
    width: "85%",
    height: 40,
    margin: 10,
    padding: 10,
    paddingRight: 0,
    backgroundColor: "#F9FFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00bcd4",
  },
  inputStyle: {
    flex: 1,
  },
});

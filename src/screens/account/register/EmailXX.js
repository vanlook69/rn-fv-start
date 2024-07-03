import React, { useState, useContext } from "react";
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import { isEmpty, lowerCase } from "lodash";

import { styles } from "./Email.styles";

import Title from "@components/myComponents/title/Title";
import MyInput from "@components/input/MyInputIcon";
import MyIcon from "@components/icons/MyIcon";
import MyButtonCircle from "@components/myComponents/botton/myButtonCircle";
import { validateEmail } from "@utils/validations";

export default function Email({ navigation }) {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(true);
  //const { xEmail } = useContext(AuthenticatedUserContext);

  const handleSubmit = async () => {
    if (isEmpty(email)) {
      Alert.alert("feedvback", "El campo es obligatorio...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else if (!validateEmail(email)) {
      Alert.alert("feedvback", "El email no es valido...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else {
      const q = query(collection(db, "email_c"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size == 0) {
        xEmail(email);
        navigation.navigate("Password");
      } else {
        Alert.alert("feedvback", `Email: "${email}" ya está en uso...`, [
          {
            text: "OK",
            onPress: () => {},
          },
        ]);
      }
      // const unsubscribe = await onAuthStateChanged(auth, (email) => {
      //   console.log(authenticatedUser);

      //  authenticatedUser ? setUser(authenticatedUser) : setUser(null);
      // } else {
      //   console.log("3");
      //   Alert.alert("feedVback", "Email no verificado...", [
      //     {
      //       text: "OK",
      //       onPress: () => {},
      //     },
      //   ]);
      // }
      //const uid = authenticatedUser.uid;
      // });

      // auth()
      //   .signInWithPopup(googleAuthProvider)
      //   .then((data) => {
      //     const statusUser = data.additionalUserInfo.isNewUser;
      //     console.log(statusUser);
      //   })
      //   .catch((error) => {
      //     let errorMessage = error.message;
      //     console.log(errorMessage);
      //   });
      // const q = query(
      //   collection(db, "username"),
      //   where("username", "==", username)
      // );
      // const querySnapshot = await getDocs(q);
      // if (querySnapshot.size == 0) {
      //   xUserName(username);
      //   navigation.navigate("Nickname");
      // } else {
      //   Alert.alert("feedvback", `Username: "${username}" no disponible...`, [
      //     {
      //       text: "OK",
      //       onPress: () => {},
      //     },
      //   ]);
      // }
    }
  };

  const onMessage = () => {
    setShowMessage(false);
    Alert.alert(
      "feedvback",
      "Debes ingresar un correo valido, ya que con el mismo nos comunicaremos contigo por cualquir duda o percace",
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
      <Title title={"FeedVBack"} subtitle={"Ingresa tu correo electrónico."} />

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
                style={styles.inputStyle}
                autoFocus={true}
                autoCapitalize="none"
                keyboardType="email-address"
                autoCompleteType="email"
                autoCorrect={false}
                onkeyup={lowerCase}
                label={"Correo electrónico..."}
                onChangeText={setEmail}
                value={email}
              />
              <MyIcon
                autoFocus={showMessage ? false : true}
                name={"email-plus-outline"}
                type={"material-community"}
                size={20}
                onPress={() => onMessage()}
                color={showMessage ? "#FF5722" : "#c1c1c1"}
                // onPress={() => setShowPassword(!showPassword)}
              />
              {/* <View style={styles.inputContainer}> */}
              {/* <TextInput
              style={styles.inputStyle}
              // style={styles.input}
              label="Correo electrónico..."
              onChangeText={setEmail}
              value={email}
            />
            <Icon
              // style={styles.icon}
              name="account-arrow-right-outline"
              type="material-community"
              size={20}
            /> */}
              {/* </View>  */}
            </View>

            {/* <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                secureTextEntry
                placeholder="Password"
                // value={this.state.password}
                // onChangeText={this.onPasswordEntry}
              />
              <Icon
                type={"material-community"}
                name="transfer-right"
                color="#000"
                size={14}
              />
            </View> */}
          </View>

          <View style={styles.EditContainer2}>
            <MyButtonCircle
              type={"material-community"}
              name={"transfer-right"}
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
    return (
      <View style={styles.Container4}>
        <Text
          style={styles.register}
          onPress={() => navigation.replace("loginForm")}
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
    fontSize: 35,
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
    fontSize: 25,
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
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    backgroundColor: "#fff",
  },
  EditContainer2: {
    //flexDirection: "row",
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
  inputContainer: {
    justifyContent: "center",
  },
  input: {
    height: 50,
  },
  icon: {
    position: "absolute",
    right: 50,
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

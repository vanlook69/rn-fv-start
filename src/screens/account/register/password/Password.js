import React, { useState, useContext } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import { isEmpty, lowerCase } from "lodash";

import { styles } from "./Password.styles";

import Title from "@components/myComponents/title/Title";
import MyInput from "@components/input/MyInputIcon";
import MyIcon from "@components/icons/MyIcon";
import MyButtonCircle from "@components/myComponents/botton/myButtonCircle";

export function Password({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  //const { xPassword } = useContext(AuthenticatedUserContext);

  const handleSubmit = async () => {
    if (password === "" || confirmPassword === "") {
      Alert.alert("feedvback", "Todos los campos son obligatorios...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else if (password !== confirmPassword) {
      Alert.alert("feedvback", "Las contraseñas tienen que ser iguales...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else if (size(password) < 8) {
      Alert.alert(
        "feedvback",
        "La contraseña debe tener al menos 8 caracteres...",
        [
          {
            text: "OK",
            onPress: () => {},
          },
        ]
      );
    } else if (!validatePassword(password)) {
      Alert.alert(
        "feedvback",
        "La contraseña debe tener 1 letra minúscula, 1 letra mayúscula, 1 número y tener al menos 8 caracteres...",
        [
          {
            text: "OK",
            onPress: () => {},
          },
        ]
      );
    } else {
      xPassword(password);
      navigation.navigate("Name");
    }
  };

  const onMessage = () => {
    setShowMessage(false);
    Alert.alert(
      "feedvback",
      "Los campos son obligatorios: Debes ingresar un password y confirmar el mismo,",
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.formContainer}>
          <View style={styles.header}>
            <Title title={"FeedVBack"} subtitle={"Ingresa tu contraseña."} />
          </View>
          {/* <View style={styles.Container3}> */}
          <View style={styles.boddy}>
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
                  // style={styles.inputStyle}
                  autoFocus={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autlabeloCorrect={false}
                  secureTextEntry={showPassword ? false : true}
                  label={"Password..."}
                  onChangeText={setPassword}
                  value={password}
                />
                <MyIcon
                  // style={styles.icon}
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  type={"material-community"}
                  size={20}
                  color={showPassword ? "#FF5722" : "#c1c1c1"}
                  onPress={() => setShowPassword(!showPassword)}
                />
              </View>
            </View>
            {/* <MyIcon
          autoFocus={showMessage ? false : true}
          name={"star-outline"}
          type={"material-community"}
          size={20}
          onPress={() => onMessage()}
          color={"#FF5722"}
        /> */}
            <View style={styles.passwordContainer}>
              <MyInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                autlabeloCorrect={false}
                secureTextEntry={showPassword ? false : true}
                label={"Confirm Password..."}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
              />
              <MyIcon
                // style={styles.icon}
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                type={"material-community"}
                size={20}
                color={showPassword ? "#FF5722" : "#c1c1c1"}
                onPress={() => setShowPassword(!showPassword)}
              />
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
            {/* </View> */}
          </View>

          <View style={{ flex: 1, alignItems: "center" }}>
            <CreateAccount />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );

  function CreateAccount() {
    return (
      <View style={styles.login}>
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

// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     //height: "100%",
//     //padding: 6,
//     //alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#fff",
//     //backgroundColor: "lime",
//   },
//   font: {
//     fontFamily: "Italianno",
//     fontSize: 35,
//     color: "#5D6D7E",
//     fontWeight: "bold",
//   },
//   title: {
//     fontFamily: "Regular",
//     fontSize: 60,
//     color: "blue",
//   },
//   subtitle: {
//     fontFamily: "Regular",
//     height: 60,
//     fontSize: 25,
//     color: "grey",
//   },
//   Container2: {
//     flex: 2,
//     //height: "100%",
//     //padding: 6,
//     alignItems: "center",
//     justifyContent: "center",
//     //backgroundColor: "white",
//     backgroundColor: "#fff",
//   },
//   Container3: {
//     flex: 5,
//     //height: "100%",
//     //padding: 6,
//     alignItems: "center",
//     justifyContent: "center",
//     //backgroundColor: "white",
//     backgroundColor: "#fff",
//   },
//   Container4: {
//     flex: 1,
//     alignItems: "flex-end",
//     justifyContent: "flex-end",
//     marginBottom: 10,
//     backgroundColor: "#fff",
//   },
//   EditContainer: {
//     //flexDirection: "row",
//     marginTop: 25,
//     height: 60,
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//     marginHorizontal: 15,
//     backgroundColor: "#fff",
//   },
//   EditContainer2: {
//     //flexDirection: "row",
//     marginTop: 15,
//     //padding: 6,
//     height: 60,
//     width: "95%",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#fff",
//     // marginHorizontal: 15,
//   },

//   // titulo: {
//   //   textAlign: "center",
//   //   marginBottom: 30,
//   //   fontSize: 24,
//   //   fontWeight: "bold",
//   //   color: "#757575",
//   // },
//   input: {
//     width: "100%",
//     marginTop: 5,
//   },
//   textRegister: {
//     marginTop: 20,
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   btnRegister: {
//     color: "#82B1FF",
//     fontWeight: "bold",
//   },
//   inputContainer: {
//     justifyContent: "center",
//   },
//   input: {
//     height: 50,
//   },
//   icon: {
//     position: "absolute",
//     right: 50,
//   },

//   passwordContainer: {
//     flexDirection: "row",
//     width: "85%",
//     height: 40,
//     margin: 10,
//     padding: 10,
//     paddingRight: 0,
//     backgroundColor: "#F9FFFF",
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "#00bcd4",
//   },
//   inputStyle: {
//     flex: 1,
//   },
// });

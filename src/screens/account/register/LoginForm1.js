import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View, Alert } from "react-native";
import { Icon } from "react-native-elements";
import { isEmpty } from "lodash";
import { useNavigation } from "@react-navigation/native";

import { AuthenticatedUserContext } from "../../context/AuthUser/AuthUser";
import { validateEmail } from "../../utils/validations";
import Loading from "../../components/Loading";

import Title from "../../components/Title";
import MyInput from "../../components/input/MyInputIcon";
import MyIcon from "../../components/icons/MyIcon";
import MyButtonCircle from "../../components/button/myButtonCircle100";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const { loading, login, xClear } = useContext(AuthenticatedUserContext);

  //const navigation = useNavigation();

  const onSubmit = async () => {
    // if (email === "" || password === "") {
    if (isEmpty(email) || isEmpty(password)) {
      Alert.alert("feedVback", "Todos los campos son obligatorios...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else if (!validateEmail(email)) {
      Alert.alert("feedVback", "El email no es valido...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else {
      login(email, password);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Title title={"FeedVBack"} subtitle={"Iniciar sesión."} />
      <View style={styles.container}>
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
            autoFocus={true}
            autoCapitalize="none"
            keyboardType="email-address"
            autoCompleteType="email"
            autoCorrect={false}
            label={"Correo electrónico..."}
            onChangeText={setEmail}
            value={email}
          />
          <MyIcon
            // style={styles.icon}
            name={"email-plus-outline"}
            type={"material-community"}
            size={20}
            color={"#c1c1c1"}
          />
        </View>
        <View style={styles.passwordContainer}>
          <MyInput
            style={styles.inputStyle}
            // textContentType={"none"}
            autoCapitalize="none"
            // keyboardType="email-address"
            autoCorrect={false}
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
            // color={"grey"}
            color={showPassword ? "#FF5722" : "#c1c1c1"}
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "flex-end",
            paddingTop: 5,
            paddingRight: 30,
            // borderColor: "red",
            // borderWidth: 1,
          }}
        >
          <Text
            style={styles.btnRegister}
            onPress={() => console.log("Recuperar contraseña")}
            //onPress={() => navigation.navigate("Email")}
          >
            ¿Olvidaste tu contraseña?
          </Text>
        </View>
        <View style={styles.EditContainer2}>
          {/* {email && ( */}
          <MyButtonCircle
            type={"material-community"}
            name={"account-reactivate-outline"}
            size={54}
            color={"#E67E22"}
            // onPress={() => handleSubmit()}
            //onPress={() => console.log("Iniciando sesión")}
            onPress={() => onSubmit()}
          />
          {/* )} */}
        </View>

        {/* <Text style={{ alignItems: "center", justifyContent: "center" }}>
          LoginForm
        </Text> */}
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <CreateAccount />
      </View>
      {/* <Loading isVisible={loading} text="Iniciando sesión" /> */}
    </SafeAreaView>
  );
}

function CreateAccount() {
  const navigation = useNavigation();

  return (
    <View style={styles.container4}>
      <Text style={styles.textRegister}>
        ¿Aún no tienes una cuenta?{" "}
        <Text
          style={styles.btnRegister}
          onPress={() => navigation.navigate("Email")}
          // onPress={() => navigation.navigate("Birth")}
        >
          Regístrate
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    //height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    //backgroundColor: "lime",
  },
  EditContainer2: {
    // flexDirection: "row",
    marginTop: 40,
    //padding: 6,
    height: 60,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    // marginHorizontal: 15,
  },
  container4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
    backgroundColor: "#fff",
  },
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
    // justifyContent: "center",
    margin: 10,
    padding: 10,
    paddingRight: 0,
    // backgroundColor: Colors.ligth,
    backgroundColor: "#F9FFFF",

    borderRadius: 10,
    borderWidth: 1,
    //borderColor: Colors.primary,
    borderColor: "#00bcd4",
    //backgroundColor: "red",
  },
  inputStyle: {
    flex: 1,
    // backgroundColor: "blue",
  },
});

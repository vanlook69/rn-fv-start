import React, { useState, useEffect, useCallback, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../../components/Title";

import MyInput from "../../components/input/MyInputIcon";
import MyIcon from "../../components/icons/MyIcon";
import MyButtonCircle from "../../components/button/myButtonCircle";

import { AuthenticatedUserContext } from "../../context/AuthUser/AuthUser";

export default function Name() {
  const [name, setName] = useState("");
  const [showMessage, setShowMessage] = useState(true);

  const { xName } = useContext(AuthenticatedUserContext);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (name === "") {
      Alert.alert("feedvback", "El campo es obligatorio...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else {
      xName(name);
      navigation.navigate("Gender");
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
      <Title title={"FeedVBack"} subtitle={"Ingresa tu nombre."} />
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
                autoCapitalize="words"
                autoCorrect={false}
                autlabeloCorrect={false}
                label={"Full name..."}
                onChangeText={setName}
                value={name}
              />
              <MyIcon
                autoFocus={showMessage ? false : true}
                name={"file-document-edit-outline"}
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
              onPress={() => navigation.navigate("Email")}
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
    // flexDirection: "row",
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

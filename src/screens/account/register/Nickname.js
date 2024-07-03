import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Title from "../../components/Title";
import MyInput from "../../components/input/MyInputIcon";
import MyIcon from "../../components/icons/MyIcon";
import MyButtonCircle from "../../components/button/myButtonCircle";

import { AuthenticatedUserContext } from "../../context/AuthUser/AuthUser";

export default function Nickname() {
  const [nickname, setNickname] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const { xNickName } = useContext(AuthenticatedUserContext);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (nickname === "") {
      Alert.alert("feedvback", "El campo es obligatorio...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else {
      xNickName(nickname);
      navigation.navigate("Register");
    }
  };

  const onMessage = () => {
    setShowMessage(true);
    Alert.alert(
      "feedvback",
      "Nickname es un campo no obligatorio: Debes ingresar un nickname, ",
      [
        {
          text: "OK",
          onPress: () => {
            setShowMessage(false);
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Title title={"FeedVBack"} subtitle={"Ingresa tu nickname"} />
      <View style={styles.Container}>
        <View style={styles.Container3}>
          <View style={styles.EditContainer}>
            <MyIcon
              autoFocus={showMessage ? false : true}
              name={"star-outline"}
              type={"material-community"}
              size={20}
              onPress={() => onMessage()}
              color={"#c1c1c1"}
            />
            <View style={styles.passwordContainer}>
              <MyInput
                autoFocus={true}
                autoCapitalize="words"
                autoCorrect={false}
                autlabeloCorrect={false}
                // onkeyup={lowerCase}
                label={"Nickname..."}
                onChangeText={setNickname}
                value={nickname}
              />
              <MyIcon
                autoFocus={showMessage ? false : true}
                name={"account-details-outline"}
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

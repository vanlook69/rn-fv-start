import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Title from "../../components/Title";
import MyButtonCircle from "../../components/button/myButtonCircle";

import { AuthenticatedUserContext } from "../../context/AuthUser/AuthUser";

export default function Gender() {
  const [gender, setGender] = useState(0);
  const [sgender, setSgender] = useState("Undefined");
  const [color, setColor] = useState("#66CC99");

  const { xGender } = useContext(AuthenticatedUserContext);

  const navigation = useNavigation();

  function onGenderSelected(key) {
    switch (key) {
      case "Male":
        setSgender("Male");
        setGender(1);
        setColor("#6699FF");
        break;
      case "Female":
        setSgender("Female");
        setGender(2);
        setColor("#FF99CC");
        break;
      case "Binary":
        setSgender("Binary");
        setGender(3);
        setColor("#CC9933");
        break;
      case "Undefined":
        setSgender("Undefined");
        setGender(0);
        setColor("#66CC99");
        break;

      default:
        break;
    }
  }

  const handleSubmit = async () => {
    if (sgender === "Undefined") {
      Alert.alert("feedvback", "Debe seleccionar un genero...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else {
      xGender(sgender);
      navigation.navigate("Birth");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Title title={"FeedVBack"} subtitle={"Selecciona un genero."} />
      <View style={styles.Container}>
        <View style={styles.Container2}>
          {/* <View
            style={{
              width: "100%",
              height: 50,
              //backgroundColor: "grey",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              borderBottomColor: "grey",
              //borderBottomWidth: 1,
              marginBottom: 20,
            }}
          > */}
          {/* <Text
              style={{
                fontSize: 20,
                fontWeights: "700",
                color: "grey",
              }}
            >
              Gender
            </Text> */}
          {/* </View> */}
          <Text style={{ fontSize: 30, color: color }}>{sgender}</Text>
        </View>

        <View style={styles.Container3}>
          <View style={styles.EditContainer}>
            <MyButtonCircle
              name={"gender-male"}
              type={"material-community"}
              size={24}
              color={"#6699FF"}
              onPress={() => onGenderSelected("Male")}
            />
            <MyButtonCircle
              name={"gender-female"}
              type={"material-community"}
              size={24}
              color={"#FF99CC"}
              onPress={() => onGenderSelected("Female")}
            />
            <MyButtonCircle
              name={"gender-non-binary"}
              type={"material-community"}
              size={24}
              color={"#CC9933"}
              onPress={() => onGenderSelected("Binary")}
            />
            <MyButtonCircle
              name={"gamepad-circle-outline"}
              type={"material-community"}
              size={24}
              color={"#66CC99"}
              onPress={() => onGenderSelected("Undefined")}
            />
          </View>
          {/* <View style={styles.EditContainer2}>
            <MyButtonCircle
              name={"gamepad-circle-outline"}
              type={"material-community"}
              size={24}
              color={"#66CC99"}
              onPress={() => onGenderSelected("Undefined")}
            />
          </View> */}
          <View style={styles.EditContainer2}>
            {/* <MyButtonCircle
              name={"transfer-left"}
              type={"material-community"}
              size={24}
              color={"#66CC99"}
              onPress={() => navigation.navigate("Name")}
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
    flexDirection: "row",
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
});

import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { isEmpty } from "lodash";
// import { DateTime } from "luxon";
//import Intl from "intl";
// import "intl";
// import "intl/locale-data/jsonp/en-US";
import Title from "../../components/Title";
import { Colors } from "../../utils/colors/colors";
import MyButtonCircle from "../../components/button/myButtonCircle100";

import { AuthenticatedUserContext } from "../../context/AuthUser/AuthUser";

export default function Register() {
  const { userInfo2, register } = useContext(AuthenticatedUserContext);
  const { birth } = userInfo2;
  //const vbirth = new Date(birth.seconds * 1000);
  // console.log(birth);
  let idioms = "en";
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

  let vname = month[birth.getMonth()];
  //console.log(vname);

  //const { email, displayName, gender, birth, age, username } = userInfo2;

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (
      userInfo2.email === "" ||
      userInfo2.displayName === "" ||
      userInfo2.password === "" ||
      userInfo2.gender === "" ||
      // isEmpty(userInfo2.birth) ||
      userInfo2.age === "" ||
      userInfo2.username === ""
      // userInfo2.nickname === ""

      // isEmpty(userInfo2.email) ||
      // isEmpty(userInfo2.displayName) ||
      // // isEmpty(password) ||
      // isEmpty(userInfo2.gender) ||
      // // isEmpty(userInfo2.birth) ||
      // isEmpty(userInfo2.age) ||
      // isEmpty(userInfo2.username)
    ) {
      //  console.log(userInfo2);
      Alert.alert("feedvback", "Todos los campos son obligatorio...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else {
      // console.log(userInfo2);
      register(
        userInfo2.email,
        userInfo2.displayName,
        userInfo2.password,
        userInfo2.gender,
        userInfo2.birth,
        userInfo2.age,
        userInfo2.username,
        userInfo2.nickname
      );
      //console.log("Enviando...");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Title title={"FeedVBack"} subtitle={"Registro."} />

      <View style={styles.Container}>
        <View
          style={{
            flex: 7,
            justifyContent: "center",
            alignItems: "center",
            // width: "100%",
            //backgroundColor: "red",
          }}
        >
          <View
            style={{
              backgroundColor: Colors.lightGray,
              width: "80%",
              paddingHorizontal: 20,
              paddingVertical: 15,
              shadowColor: Colors.Gray,
              borderRadius: 10,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.9,
              shadowRadius: 7,
              marginRight: 0,
              marginBottom: 40,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                paddingBottom: 3,
                fontFamily: "Futura",
              }}
            >
              {userInfo2.displayName}
            </Text>
            <Text style={styles.text}>Email: {userInfo2.email}</Text>
            <Text style={styles.text}>Username: {userInfo2.username}</Text>
            <Text style={styles.text}>Nickname: {userInfo2.nickname}</Text>
            <Text style={styles.text}>Password: {userInfo2.password}</Text>
            <Text style={styles.text}>Gender: {userInfo2.gender}</Text>
            <Text style={styles.text}>
              Birth: {vname}, {birth.getDate()} - {birth.getUTCFullYear()}.
            </Text>
            <Text style={styles.text}>Age: {userInfo2.age}</Text>
          </View>
          <View style={styles.EditContainer2}>
            <MyButtonCircle
              type={"material-community"}
              name={"account-plus-outline"}
              size={54}
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
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#fff",
    // backgroundColor: "lime",
  },
  font: {
    fontFamily: "Italianno",
    fontSize: 35,
    color: "#5D6D7E",
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    paddingBottom: 3,
    fontFamily: "Futura",
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
    flexDirection: "row",
    marginTop: 25,
    height: 60,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    backgroundColor: "#fff",
    marginBottom: 30,
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

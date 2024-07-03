import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import { Tooltip, Button, Icon, Input } from "react-native-elements";
import { size, isEmpty } from "lodash";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";

//import { AuthContext } from "../../context/AuthContext";

import MyButtonCircle from "../../components/myComponents/botton/myButtonCircle";
import MyIcon from "../../components/icons/MyIcon";
//import Loading from "../../components/Loading";
import { validateEmail, validatePassword } from "../../utils/validations";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const [showMessage, setShowMessage] = useState(true);

  //const { loading, register } = useContext(AuthContext);
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Regular: require("../../assets/fonts/Great_Vibes/GreatVibes-Regular.ttf"),
    Imperial: require("../../assets/fonts/Imperial_Script/ImperialScript-Regular.ttf"),
    Italianno: require("../../assets/fonts/Italianno/Italianno-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  const handleSubmit = async () => {
    if (
      isEmpty(formData.name) ||
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.confirm)
    ) {
      Alert.alert("feedvback", "Todos los campos son obligatorios...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else if (!validateEmail(formData.email)) {
      Alert.alert("feedvback", "email no es correcto...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else if (formData.password !== formData.confirm) {
      Alert.alert("feedvback", "Las contraseñas tienen que ser iguales...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else if (size(formData.password) < 8) {
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
    } else if (!validatePassword(formData.password)) {
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
      register(formData.name, formData.email, formData.password);
    }
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const onMessage = () => {
    setShowMessage(false);
    Alert.alert("Reistrar cuenta", "Presionar para registrar cuenta...", [
      {
        text: "OK",
        onPress: () => {
          setShowMessage(true);
        },
      },
    ]);
  };

  return (
    <View style={styles.formContainere}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 46,
          marginBottom: 20,
        }}
      >
        <View style={{ marginTop: 50 }} onLayout={onLayout}>
          {/* <Text style={styles.title}>FeedVBack</Text>
          <Text style={styles.subtitle}>Connect</Text> */}
          <Text style={styles.prueba}>FeedVBack</Text>
        </View>
      </View>
      {/* <KeyboardAwareScrollView> */}

      <View
        style={{
          flex: 2,
          alignItems: "center",
          marginTop: 20,
          marginHorizontal: 40,
        }}
      >
        <Input
          autoCapitalize="words"
          containerStyle={styles.input}
          autoFocus={true}
          placeholder="Ingresa tu nombre..."
          onChange={(e) => onChange(e, "name")}
          leftIcon={
            <Icon
              name="file-document-edit-outline"
              type="material-community"
              marginRight={10}
              marginLeft={3}
              size={24}
              color="#90A4AE"
            />
          }
        />
        <Input
          containerStyle={styles.input}
          //autoFocus={true}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          autoCompleteType="email"
          placeholder="Ingresa tu email..."
          onChange={(e) => onChange(e, "email")}
          leftIcon={
            <Icon
              name="email-check-outline"
              type="material-community"
              marginRight={10}
              marginLeft={3}
              size={24}
              color="#90A4AE"
              // iconStyle={styles.iconRight}
            />
          }
        />
        <Input
          containerStyle={styles.input}
          placeholder="Ingresa tu contraseña..."
          onChange={(e) => onChange(e, "password")}
          password={true}
          //secureTextEntry={!showPassword}
          secureTextEntry={showPassword ? false : true}
          // errorMessage={errorPassword}
          // defaultValue={formData.password}
          leftIcon={
            <Icon
              name={showPassword ? "desk-lamp" : "shield-lock-outline"}
              type="material-community"
              marginRight={10}
              marginLeft={3}
              size={24}
              // color="#90A4AE"
              color={showPassword ? "#FF5722" : "#c1c1c1"}
            />
          }
          rightIcon={
            <Icon
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              type="material-community"
              size={24}
              color={showPassword ? "#FF5722" : "#c1c1c1"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <Input
          containerStyle={styles.input}
          placeholder="Confirma tu contraseña..."
          onChange={(e) => onChange(e, "confirm")}
          password={true}
          secureTextEntry={showPassword ? false : true}
          // errorMessage={errorConfirm}
          // defaultValue={formData.confirm}
          leftIcon={
            <Icon
              // name="shield-lock-outline"

              name={showPassword ? "desk-lamp" : "shield-lock-outline"}
              type="material-community"
              marginRight={10}
              marginLeft={3}
              size={24}
              // color="#90A4AE"
              color={showPassword ? "#FF5722" : "#c1c1c1"}
            />
          }
          rightIcon={
            <Icon
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              type="material-community"
              //marginRight={3}
              //  marginLeft={3}
              size={24}
              // color="#c1c1c1"
              color={showPassword ? "#FF5722" : "#c1c1c1"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />

        <MyButtonCircle
          type={"material-community"}
          name={"collapse-all-outline"}
          size={24}
          color={"#008080"}
          onPress={() => handleSubmit()}
        />

        <MyIcon
          autoFocus={showMessage ? false : true}
          name={"star-outline"}
          type={"material-community"}
          size={20}
          onPress={() => onMessage()}
          color={"#FF5722"}
        />

        {/* <View style={{ flex: 1, alignItems: "center" }}>
          <Tooltip
            popover={<Text style={{ color: "#fff" }}>Crear cuenta</Text>}
          >
            <Text
              style={{
                color: "#FF5722",
                //   backgroundColor: "blue",
              }}
            >
              Info
            </Text>
          </Tooltip>
        </View> */}

        {/* <Button
          title="Unirse"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          onPress={() => handleSubmit()}
        /> */}
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <CreateAccount />
      </View>
      {/* <Loading isVisible={loading} text="Creando cuenta" /> */}
    </View>
  );
}

function CreateAccount() {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Text
        style={styles.register}
        onPress={() => navigation.navigate("loginForm")}
      >
        !Ya tienes una cuenta¡{" "}
        <Text style={styles.btnRegister}>Iniciar Sesión</Text>
      </Text>
    </View>
  );
}

function defaultFormValue() {
  return {
    name: "",
    email: "",
    password: "",
    confirm: "",
  };
}

const styles = StyleSheet.create({
  formContainere: {
    // flexDirection: "column",
    flex: 1,
    // alignItems: "center",
    //justifyContent: "center",
    // marginHorizontal: 40,
    // marginTop: 50,
    // marginBottom: 100,
    //  backgroundColor: "#FFFFFF",
  },
  logo: {
    width: "100%",
    height: 150,
    marginTop: 100,
    marginBottom: 60,
  },
  viewRedSocial: {
    flexDirection: "row",
    width: "80%",
    height: 50,
    //margin: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40,
  },
  viewRedSocial2: {
    // visibility: "hidden",

    flexDirection: "row",
    padding: 10,
    width: "60%",
    height: 62,
    borderRadius: 30,
    marginTop: 10,
    //backgroundColor: "#555555",
    backgroundColor: "#484848",
    //marginTop: -50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40,
    borderWidth: 1,
    borderEndWidth: 4,
    borderBottomWidth: 4,
    borderEndColor: "#000000",
    borderBottomColor: "#000000",
    borderColor: "#767676",
    opacity: 1,
  },
  image: {
    height: 150,
    width: "100%",
    marginTop: 30,
    marginBottom: 70,
  },
  divider: {
    backgroundColor: "#442484",
    // width: "100%",
    // borderWidth: 1,
    margin: 20,
  },
  login: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 60,
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
  btnContainer: {
    marginTop: 30,
    width: "95%",
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#82B1FF",
  },
  icon: {
    color: "#c1c1c1",
  },
  btnGoogle: {
    backgroundColor: "#EA4335",
  },
  register: {
    marginTop: 15,
    marginHorizontal: 10,
    alignSelf: "center",
  },
  btnRegister: {
    color: "#82B1FF",
    //color: "#FF5722",

    fontWeight: "bold",
  },

  title: {
    fontFamily: "Regular",
    fontSize: 60,
    color: "blue",
  },
  subtitle: {
    fontFamily: "Regular",
    fontSize: 40,
    color: "grey",
  },
  prueba: {
    fontFamily: "Italianno",
    fontSize: 80,
    color: "#5D6D7E",
    fontWeight: "bold",
  },

  iconContainer: {
    marginTop: 20,
    width: "20%",
    alignSelf: "center",
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

  // formContainere: {
  //   //  flexDirection: "column",
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginHorizontal: 40,
  //   // marginTop: 30,
  //   //  backgroundColor: "#FFFFFF",
  // },
  // logo: {
  //   width: "100%",
  //   height: 150,
  //   marginTop: 100,
  //   marginBottom: 60,
  // },
  // image: {
  //   height: 150,
  //   width: "100%",
  //   marginTop: 30,
  //   marginBottom: 70,
  // },
  // divider: {
  //   backgroundColor: "#442484",
  //   margin: 20,
  // },
  // login: {
  //   flex: 1,
  //   justifyContent: "flex-end",
  //   marginBottom: 60,
  // },
  // titulo: {
  //   textAlign: "center",
  //   marginBottom: 30,
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   color: "#757575",
  // },
  // input: {
  //   width: "100%",
  //   marginTop: 5,
  // },
  // btnContainer: {
  //   marginTop: 20,
  //   width: "95%",
  //   alignSelf: "center",
  // },
  // btn: {
  //   backgroundColor: "#82B1FF",
  // },
  // icon: {
  //   color: "#c1c1c1",
  // },
  // btnGoogle: {
  //   backgroundColor: "#EA4335",
  // },
  // register: {
  //   marginTop: 15,
  //   marginHorizontal: 10,
  //   alignSelf: "center",
  // },
  // btnRegister: {
  //   color: "#82B1FF",
  //   //color: "#FF5722",

  //   fontWeight: "bold",
  // },
  // iconContainer: {
  //   marginTop: 20,
  //   width: "20%",
  //   alignSelf: "center",
  // },
});

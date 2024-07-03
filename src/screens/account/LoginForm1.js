import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import {
  Tooltip,
  Button,
  Icon,
  Input,
  Divider,
  SocialIcon,
} from "react-native-elements";
import jwtDecode from "jwt-decode";
import { isEmpty } from "lodash";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";

import { useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN, GET_USER } from "@gql/user";
import { setAuthenticated } from "@redux/slices/userSlice";

//import { setToken, decodeToken } from "../../utils/token";

import MyButtonCircle from "@components/myComponents/botton/myButtonCircle";
import MyIcon from "@components/icons/MyIcon";
import { validateEmail } from "@utils/validations";
//import Loading from "../../components/Loading";

export default function LoginForm() {
  const dispatch = useDispatch();

  // const [emailV, setEmailV] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const [showMessage, setShowMessage] = useState(true);

  const navigation = useNavigation();
  //const [error, setError] = useState("");

  // const [getUser] = useMutation(GET_USER, {
  //   onCompleted: (data) => {
  //     const { user } = data.getUser;
  //     console.log("getUser: ", user);
  //   },
  // });

  const [loginMutation] = useMutation(LOGIN, {
    onCompleted: (data) => {
      const { token } = data.loginMutation;
      const user = jwtDecode(token);

      // console.log(token);
      // console.log(formData.email);
      // const [getUser] = useMutation(GET_USER, {
      //   onCompleted: (data) => {
      //     const { user } = data.getUser;
      //     console.log("getUser: ", user);
      //   },
      // });

      // if (token) {
      //   getUser({
      //     variables: {
      //       input: emailV,
      //     },
      //   });
      // }

      //const decodedToken = jwt_decode(token);
      // dispatch(createUser(decodedToken));

      // console.log("Decode: ", decodedToken);

      dispatch(setAuthenticated({ isAuthenticated: true, token, user }));
      //dispatch(createUser(token));
      // dispatch(createUser(jwtDecode(token)));

      //console.log("Guardar1: ", token);
      // setToken(token);
      //await AsyncStorage.setItem(token, token)

      const saveData = async () => {
        try {
          await AsyncStorage.setItem("token", token);
          // alert("Datos guardados exitosamente");
        } catch (e) {
          alert("No se pudieron guardar los datos en el almacenamiento");
        }
      };
      saveData();
      setFormData(defaultFormValue());
      navigation.navigate("navigation");
    },
  });

  const onSubmit = async () => {
    if (isEmpty(formData.email) || isEmpty(formData.password)) {
      Alert.alert("feedVback", "Todos los campos son obligatorios...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else if (!validateEmail(formData.email)) {
      Alert.alert("feedVback", "El email no es correcto...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else {
      try {
        await loginMutation({
          variables: {
            input: formData,
          },
        });

        // await getUser({
        //   variables: {
        //     input: formData.email,
        //   },
        // });

        // const { data } = await login({
        //   variables: {
        //     input: formData,
        //   },
        // });
      } catch (error) {
        console.log(error);
      }

      //  login(formData.email, formData.password);
    }
  };

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

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  // const onRS = () => {
  //   setRedSocial(true);
  //   console.log("Menu General");
  //   console.log(redSocial);
  // };

  const onMessage = () => {
    setShowMessage(false);
    Alert.alert("Iniciar sesión", "Presionar para iniciarsesión...", [
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
          // defaultValue="vlk@hotmail.com"
          containerStyle={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          autoFocus={true}
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
            />
          }
        />
        <Input
          //defaultValue="123456"
          containerStyle={styles.input}
          placeholder="Ingresa tu contraseña..."
          //text="123456"
          onChange={(e) => onChange(e, "password")}
          password={true}
          //
          // autoCapitalize={false}
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
              //color="#90A4AE"
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
        {/* <View>
        <Text>{user.uid}</Text>
        <Text>{user.displayName}</Text>
        <Text>{user.email}</Text>
      </View> */}
        {/* <Button
          title="Iniciar sesión"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          onPress={onSubmit}
        /> */}
        {/* <MyButton2 title="Login2" onPress={() => onSubmit()} /> */}
        <MyButtonCircle
          type={"material-community"}
          name={"collapse-all-outline"}
          size={24}
          color={"#008080"}
          //color={"#00FF00"}
          onPress={() => onSubmit()}
        />

        <MyIcon
          autoFocus={showMessage ? false : true}
          name={"star-outline"}
          type={"material-community"}
          size={20}
          onPress={() => onMessage()}
          color={"#FF5722"}
        />

        {/* <Tooltip popover={<Text>Iniciar sesión</Text>}>
          <Text>Press me</Text>
        </Tooltip> */}
        {/* <MyButton title="Login" onPress={() => onSubmit()} /> */}

        <Divider style={styles.divider} />

        {/* <View style={styles.viewRedSocial}>
          <Icon
            raised
            name="google-circles-extended"
            type="material-community"
            color="#F25022"
            iconStyle={styles.btnCloseSession1}
            onPress={() => onRS()}
          />
        </View> */}

        {/* <View style={styles.viewRedSocial2}>
          <Icon
            raised
            name="facebook"
            type="material-community"
            color="#4267B2"
            iconStyle={styles.btnCloseSession1}
            onPress={() => console.log("facebook")}
          />
          <Icon
            raised
            name="google"
            type="material-community"
            color="#DB4437"
            iconStyle={styles.btnCloseSession1}
            //onPress={() => console.log("google")}
            onPress={() => navigation.navigate("googleForm")}
          />
          <Icon
            raised
            name="twitter"
            type="material-community"
            color="#1DA1F2"
            iconStyle={styles.btnCloseSession1}
            onPress={() => console.log("twitter")}
          /> */}

        {/* <SocialIcon light type="facebook" />
        <SocialIcon light type="google" />
        <SocialIcon light type="twitter" /> */}
        {/* </View> */}
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <CreateAccount />
      </View>

      {/* <Loading isVisible={loading} text="Iniciando sesión" /> */}

      {/* </KeyboardAwareScrollView> */}
    </View>
  );

  function CreateAccount() {
    //  const navigation = useNavigation();

    return (
      <View style={styles.login}>
        <Text style={styles.textRegister}>
          ¿Aún no tienes una cuenta?{" "}
          <Text
            style={styles.btnRegister}
            onPress={() => navigation.navigate("registerForm")}
          >
            Regístrate
          </Text>
        </Text>
      </View>
    );
  }
}

function defaultFormValue() {
  return {
    email: "",
    password: "",
  };
}

// function defaultFormValue() {
//   return {
//     email: "",
//     password: "",
//   };
// }

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
});

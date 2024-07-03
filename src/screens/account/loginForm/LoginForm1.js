import React, { useState, useCallback, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  Tooltip,
  Button,
  Icon,
  Input,
  Divider,
  SocialIcon,
} from "react-native-elements";
//import { useQuery } from "@apollo/client";
import jwtDecode from "jwt-decode";
import { isEmpty, lowerCase } from "lodash";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

import { useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN, GET_USER } from "@gql/user";
import { setAuthenticated } from "@redux/slices/userSlice";

import { styles } from "./LoginForm.styles";
import { useForm } from "@hooks/useForm";

import { userQuery } from "@functions/userQuery";

import Title from "@components/myComponents/title/Title";
import MyButtonCircle from "@components/myComponents/botton/myButtonCircle";
import MyInput from "@components/input/MyInputIcon";
import MyIcon from "@components/icons/MyIcon";
import { validateEmail } from "@utils/validations";
//import Loading from "../../components/Loading";

export default function LoginForm({ navigation }) {
  const dispatch = useDispatch();
  const { formData, onChange, email, password } = useForm({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  //const [formData, setFormData] = useState(defaultFormValue());
  const [showMessage, setShowMessage] = useState(true);

  const [loginMutation] = useMutation(LOGIN, {
    onCompleted: (result) => {
      const { token } = result.loginMutation;
      const user = jwtDecode(token);
      dispatch(setAuthenticated({ isAuthenticated: true, token, user }));
      //console.log("Userr: ", user);
      // const { user_id: id } = jwtDecode(token);
      // console.log("TOKEN: ", id);
      // const { loading, error, data } = useQuery(GET_USER, {
      //   variables: { id },
      // });
      // // const user = jwtDecode(token);
      // console.log(": ", data);

      // querysUser(token);
      //dispatch(setAuthenticated({ isAuthenticated: true, token }));

      const saveData = async () => {
        try {
          // console.log("Alert saved1");
          // userQuery(token);
          // const { user_id: id } = jwtDecode(token);
          // console.log("Functions: ", id);
          // const { loading, error, data } = useQuery(GET_USER, {
          //   variables: { id },
          // });
          //console.log("Alert saved2");
          // const user = data.getUser;

          // console.log("Functions User: ", user);
          //console.log("Alert saved3");
          await AsyncStorage.setItem("token", token);
          // alert("Datos guardados exitosamente");
        } catch (e) {
          alert("No se pudieron guardar los datos en el almacenamiento");
        }
      };
      saveData();
      // userQuery(token);
      // setFormData(defaultFormValue());
      navigation.replace("navigation");
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
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const onChange = (fieldName, value) => {
  //   setFormData({
  //     ...formData,
  //     [fieldName]: value,
  //   });
  // };

  // const onRS = () => {
  //   setRedSocial(true);
  //   console.log("Menu General");
  //   console.log(redSocial);
  // };

  const XXXuserQuery = async (token) => {
    const dispatch = useDispatch();
    console.log("Function token: ", token);
    try {
      if (!token) {
      } else {
        const { user_id: id } = jwtDecode(token);
        console.log("Functions: ", id);
        // const { loading, error, data } = useQuery(GET_USER, {
        //   variables: { id },
        // });
        // const user = data.getUser;

        // console.log("Functions User: ", user);

        // dispatch(
        //   setAuthenticated({
        //     isAuthenticated: true,
        //     token,
        //     user,
        //   })
        // );
      }

      //const { isAuthenticated, token, user } = useSelector((state) => state.user);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.formContainer}>
          <View style={styles.header}>
            <Title title={"FeedVBack"} subtitle={"Iniciar sesión."} />
          </View>
          <View style={styles.boddy}>
            <View style={styles.passwordContainer}>
              <MyInput
                // style={styles.inputStyle}
                autoFocus={true}
                autoCapitalize="none"
                keyboardType="email-address"
                autoCompleteType="email"
                autoCorrect={false}
                onkeyup={lowerCase}
                label={"Correo electrónico..."}
                //value={formData.email}
                value={email}
                onChangeText={(text) => onChange("email", text)}
              />
              <MyIcon
                name={"email-plus-outline"}
                type={"material-community"}
                size={20}
                // color={"#c1c1c1"}
                color={"#FF5722"}
              />
            </View>
            <View style={styles.passwordContainer}>
              <MyInput
                // style={styles.inputStyle}
                text="password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={showPassword ? false : true}
                label={"Password..."}
                value={password}
                onChangeText={(text) => onChange("password", text)}
              />
              <MyIcon
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                type={"material-community"}
                size={20}
                color={showPassword ? "#FF5722" : "#c1c1c1"}
                onPress={() => setShowPassword(!showPassword)}
              />
            </View>
            {/* <Input
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
            /> */}
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
          </View>

          <View style={{ flex: 1, alignItems: "center" }}>
            <CreateAccount />
          </View>

          {/* <Loading isVisible={loading} text="Iniciando sesión" /> */}
        </View>
      </SafeAreaView>
      {/* </KeyboardAwareScrollView> */}
    </KeyboardAvoidingView>
  );

  function CreateAccount() {
    return (
      <View style={styles.login}>
        <Text style={styles.textRegister}>
          ¿Aún no tienes una cuenta?{" "}
          <Text
            style={styles.btnRegister}
            onPress={() => navigation.replace("email")}
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

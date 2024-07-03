import React, { useState } from "react";
//import { View, TextInput, Button, ActivityIndicator, Text } from "react-native";
//import React, { useState, useCallback, useEffect } from "react";
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
import { isEmpty, lowerCase } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useLazyQuery, useMutation } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

import { screens } from "@utils";
import { useForm } from "@hooks/useForm";

//import { userQuery } from "@functions/userQuery";

import Title from "@components/myComponents/title/Title";
import MyButtonCircle from "@components/myComponents/botton/myButtonCircle";
import MyInput from "@components/input/MyInputIcon";
import MyIcon from "@components/icons/MyIcon";
import { validateEmail } from "@utils/validations";
//import { LOGIN_QUERY, USER_QUERY } from "../graphql/queries";
import { LOGIN, GET_USER } from "@gql/user";
import {
  setAuthenticated,
  setToken,
  setUserId,
  setUser,
  setLoading,
  setError,
  clearError,
  resetUser,
} from "@redux/slices/userSlice";
import { styles } from "./LoginForm.styles";

//export default LoginForm = ({ navigation }) => {
export function LoginForm({ navigation }) {
  const dispatch = useDispatch();
  const { formData, onChange, email, password } = useForm({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  //const [formData, setFormData] = useState(defaultFormValue());
  const [showMessage, setShowMessage] = useState(true);

  //const { loading, error } = useSelector((state) => state.user);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [loginMutation] = useMutation(LOGIN, {
    //const [loginMutation, { data }] = useLazyQuery(LOGIN, {
    onCompleted: async (data) => {
      // Guardar token y usuario ID en AsyncStorage
      const user = jwtDecode(data.loginMutation.token);
      await AsyncStorage.setItem("token", data.loginMutation.token);
      // await AsyncStorage.setItem("userId", data.loginMutation.id);

      dispatch(setToken(data.loginMutation.token));
      // dispatch(setUser(user));
      dispatch(setUser({ user }));
      // console.log("UserXX: ", user);
      dispatch(setUserId(user.user_id));
      dispatch(setAuthenticated(true));
      dispatch(setLoading(false));
      dispatch(clearError());
    },
    onError: (error) => {
      dispatch(setLoading(false));
      dispatch(setError(error.message));
    },
  });

  // const { token } = useSelector((state) => state.user);

  // if (token) {
  //   const { user_id: id } = jwtDecode(token);
  //   // //const { user_id: id } = user;
  //   console.log("ID: ", id);
  //   console.log("Token: ", token);

  //   // const { loading: userDataLoading, data: userData } = useQuery(GET_USER, {
  //   // const { loading: userDataLoading, data: userData } = useQuery(GET_USER, {
  //   //   variables: { id },
  //   //   onCompleted: (user) => {
  //   //     // dispatch(
  //   //     //   setUser({
  //   //     //     user: user.getUser,
  //   //     //   })
  //   //     // );
  //   //     // console.log("DATA: ", user.getUser);
  //   //   },
  //   // });
  // }

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
        dispatch(setLoading(true));
        dispatch(clearError());
        await loginMutation({
          variables: {
            input: formData,
          },
        });
        //userQuery();
        navigation.replace("navigation");
      } catch (error) {
        console.log(error);
      }
    }
  };
  // const onSubmit = async () => {
  //   dispatch(setLoading(true));
  //   dispatch(clearError());
  //   // loginMutation({ variables: { email, password } });
  //   await loginMutation({
  //     variables: {
  //       input: formData,
  //     },
  //   });
  //   navigation.replace("navigation");
  // };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.formContainer}>
          <View style={styles.control}>
            <MyIcon
              autoFocus={showMessage ? false : true}
              name={"axis-z-rotate-clockwise"}
              type={"material-community"}
              size={30}
              onPress={() => navigation.replace(screens.auth.authStartScreen)}
              color={"#2E86C1"}
            />
          </View>
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
              name={"account-key-outline"}
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
            onPress={() => navigation.replace(screens.auth.email)}
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

// if (userDataLoading) return <ActivityIndicator />;

// return (
//   <View>
//     <TextInput
//       placeholder="Email"
//       value={email}
//       onChangeText={(text) => setEmail(text)}
//     />
//     <TextInput
//       placeholder="Password"
//       value={password}
//       onChangeText={(text) => setPassword(text)}
//       secureTextEntry
//     />
//     {loading ? (
//       <ActivityIndicator />
//     ) : (
//       <Button title="Login" onPress={handleLogin} />
//     )}
//     {/* {error && <Text>{error}</Text>} */}
//   </View>
// );
//};

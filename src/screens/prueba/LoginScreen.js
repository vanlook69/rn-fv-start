import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { isEmpty, lowerCase } from "lodash";
import { login } from "../../store/slices/authSlice";
import { useMutation, gql } from "@apollo/client";

import { useForm } from "../../hooks/useForm";
import { LOGIN } from "../../gql/user";

// const LOGIN = gql`
//   mutation LoginMutation($input: LoginInput) {
//     loginMutation(input: $input) {
//       token
//     }
//   }
// `;

const LoginScreen = ({ navigation }) => {
  const { formData, onChange, email, password } = useForm({
    email: "",
    password: "",
  });
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [loginMutation, { loading }] = useMutation(LOGIN);

  const handleLogin = async () => {
    try {
      //const result = await loginMutation({ variables: { email, password } });
      //   console.log(formData);
      const result = await loginMutation({
        variables: {
          input: formData,
        },
      });

      //   console.log("result: ", result.data.loginMutation);

      if (result.data) {
        dispatch(login(result.data.loginMutation));
        // navigation.navigate("Home");
        navigation.replace("Home");
      }
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        autoFocus={true}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        value={email}
        onkeyup={lowerCase}
        placeholder="Email"
        onChangeText={(text) => onChange("email", text)}
      />
      <TextInput
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => onChange("password", text)}
      />
      <Button title="Login" onPress={handleLogin} />
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
    </View>
  );
};

export default LoginScreen;

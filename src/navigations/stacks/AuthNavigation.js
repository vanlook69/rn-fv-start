import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AuthStartScreen,
  LoginForm,
  // LoginScreen,
  //RegisterScreen,
} from "../../screens/Auth";
//import { IconBack } from "../../components/Navigation";
import { screens } from "../../utils";
import { styles } from "../Styles.styles";

import Navigation from "@navigations/tab/Navigation";

const Stack = createNativeStackNavigator();

export function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles,
        //headerLeft: IconBack,
      }}
    >
      <Stack.Screen
        name={screens.auth.authStartScreen}
        component={AuthStartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.auth.loginForm}
        component={LoginForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="navigation"
        component={Navigation}
        options={{ title: "Home", headerShown: false }}
      />
      {/* <Stack.Screen
        name={screens.auth.registerScreen}
        component={RegisterScreen}
        options={{ title: "Registro" }}
      /> */}
      {/* <Stack.Screen
        name="AppNavigation"
        component={AppNavigation}
        options={{ title: "Home", headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}

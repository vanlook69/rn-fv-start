import { Text } from "react-native";
import { useAuth } from "@hooks";
import { AuthNavigation } from "./AuthNavigation";
import { AppNavigation } from "./AppNavigation";

export function RootNavigation() {
  const { auth } = useAuth();
  {
    auth ? <Text>Principal</Text> : <Text>Auht</Text>;
  }
  //   return auth ? <AppNavigation /> : <AuthNavigation />;
}

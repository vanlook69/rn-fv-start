import { SafeAreaView, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screens } from "@utils";
//import { assets } from "../../../assets";
import Title from "@components/myComponents/title/Title";
import { styles } from "./AuthStartScreen.styles";

export function AuthStartScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.replace(screens.auth.loginForm);
    //navigation.replace(screens.auth.loginForm);
  };

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.header}>
        <Title title={"FeedVBack"} subtitle={"Chat"} />
      </View>
      <Image
        style={styles.img}
        // source={require("../../../assets/jpg/red.jpeg")}
        source={require("../../../assets/jpg/red.jpeg")}
      />

      {/* <Image source={assets.image.jpg.auth01} style={styles.img} /> */}
      {/* <Image source={assets.image.jpg.auth01} style={styles.img} /> */}

      <View>
        <Text style={styles.title}>
          Te damos la bienvenida al Chat feedVback
        </Text>
        <Text style={styles.description}>
          Recomendamos usar este servicio con responsabilidad para disfrutar de
          la experiencia que proporciona esta app desarrollada con cariño
        </Text>
        <Text style={styles.description}>
          Consulta nuestras Política de privacidad. Pulsa "Aceptar y continuar"
          para aceptar las Condiciones del servicio
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <CreateAccount />
      </View>
    </SafeAreaView>
  );

  function CreateAccount() {
    return (
      <View style={styles.login}>
        <Text style={styles.textRegister}>
          {/* ¿Aún no tienes una cuenta?{" "} */}
          <Text style={styles.btnRegister} onPress={goToLogin}>
            {/* onPress={() => navigation.replace("loginForm")} */}
            Aceptar y continuar...
          </Text>
        </Text>
      </View>
    );
  }
}

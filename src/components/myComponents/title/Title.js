import React, { useEffect, useCallback } from "react";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { styles } from "./Title.styles";

export default function Title({ title, subtitle }) {
  const [fontsLoaded] = useFonts({
    Regular: require("@assets/fonts/Great_Vibes/GreatVibes-Regular.ttf"),
    Imperial: require("@assets/fonts/Imperial_Script/ImperialScript-Regular.ttf"),
    Italianno: require("@assets/fonts/Italianno/Italianno-Regular.ttf"),
    Futura: require("@assets/fonts/futura_light_bt/futura_light_italic_font.ttf"),
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

  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
    <View style={{ marginTop: 5, alignItems: "center" }} onLayout={onLayout}>
      {/* <Text style={styles.title}>FeedVBack</Text> */}

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {/* <Text style={styles.subtitle}>Connect</Text> */}
    </View>
    // </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     //height: "100%",
//     //padding: 6,
//     //alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#fff",
//     //backgroundColor: "lime",
//   },
//   title: {
//     fontFamily: "Italianno",
//     fontSize: 40,
//     //color: "#5D6D7E",
//     color: "black",
//     // fontWeight: "bold",
//     // fontWeight: 700,
//   },
//   subtitle: {
//     fontFamily: "Regular",
//     //fontFamily: "Futura",
//     height: 60,
//     fontSize: 25,
//     color: "grey",
//   },
// });

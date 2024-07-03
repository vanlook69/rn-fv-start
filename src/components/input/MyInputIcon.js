import { TextInput, View, StyleSheet } from "react-native";
//import { TextInput } from "@react-native-material/core";

//import Colors from "../../utils/colors/colors";
export default function MyInput({
  autoFocus,
  autoCapitalize,
  autoCorrect,
  label,
  value,
  onChangeText,
  secureTextEntry,
}) {
  return (
    // <View style={styles.passwordContainer1}>
    <View style={{ width: "91%", flexDirection: "row" }}>
      <TextInput
        // style={styles.inputStyle}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        placeholder={label}
        // style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: "row",
    width: "95%",
    height: 40,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    // backgroundColor: Colors.ligth,
    backgroundColor: "#F9FFFF",

    borderRadius: 10,
    borderWidth: 1,
    //borderColor: Colors.primary,
    borderColor: "#00bcd4",
  },
  inputStyle: {
    flex: 1,
  },
  container: {
    width: "95%",
    height: 40,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    // backgroundColor: Colors.ligth,
    backgroundColor: "#F9FFFF",

    borderRadius: 10,
    borderWidth: 1,
    //borderColor: Colors.primary,
    borderColor: "#00bcd4",
  },
  input: {
    width: "95%",
    height: 40,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    // backgroundColor: Colors.ligth,
    backgroundColor: "#F9FFFF",

    borderRadius: 10,
    borderWidth: 1,
    //borderColor: Colors.primary,
    borderColor: "#00bcd4",
  },
});

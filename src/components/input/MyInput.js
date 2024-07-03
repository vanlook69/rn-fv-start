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
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
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
    // borderColor: "red",
  },
  inputStyle: {
    justifyContent: "center",
    margin: 10,
    padding: 10,
    fontSize: 30,
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
    //borderColor: "red",
  },
});

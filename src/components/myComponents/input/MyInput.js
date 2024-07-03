import { TextInput, Text, View, StyleSheet } from "react-native";
import colors from "../../../utils/colors/colors";

export default function MyInput({
  label,
  value,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={label}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 45,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    backgroundColor: colors.ligth,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
});

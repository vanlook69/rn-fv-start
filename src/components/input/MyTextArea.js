import { TextInput, Text, View, StyleSheet } from "react-native";
//import Colors from "../../utils/colors/colors";

// const UselessTextInput = (props) => {
//   return (
//     <TextInput
//       {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
//       // autoFocus={autoFocus}
//       // autoCapitalize={autoCapitalize}
//       // placeholder={label}
//       // style={styles.input}
//       //value={value}
//       // onChangeText={onChangeText}
//       editable
//       maxLength={150}
//     />
//   );
// };

export default function MyTextArea({
  autoFocus,
  autoCapitalize,
  label,
  value,
  onChangeText,
  // secureTextEntry,
}) {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.container}>
        {/* <UselessTextInput */}
        <TextInput
          multiline
          numberOfLines={4}
          autoFocus={autoFocus}
          autoCapitalize={autoCapitalize}
          placeholder={label}
          // style={styles.input}
          value={value}
          onChangeText={onChangeText}
          // onChangeText={(text) => onChangeText(text)}
          //onChange={(e) => onChange(e, (value = { words }))}
          // style={{ padding: 10 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: value,
    //fontFamily: "Cochin",
    width: "95%",
    height: 95,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00bcd4",
  },
});
